﻿module Humanizer.DateHumanizeStrategy
{
    "use strict";

    export class DefaultDateHumanizeStrategy implements IDateHumanizeStrategy
    {
        humanize(input: Date, comparisonBase: Date, culture: string): string
        {
            var tense: Localisation.Tense = input > comparisonBase ? Localisation.Tense.Future : Localisation.Tense.Past;
            var ts: number = Math.abs(comparisonBase.getTime() - input.getTime());

            var formatter: Localisation.Formatter.IFormatter = Configuration.Configurator.getFormatter(culture);

            if (ts < (500).milliseconds())
            {
                return formatter.DateHumanize(Localisation.TimeUnit.Millisecond, tense, 0);
            }

            if (ts < (60).seconds())
            {
                return formatter.DateHumanize(Localisation.TimeUnit.Second, tense, Math.floor(ts.toSeconds()));
            }

            if (ts < (120).seconds())
            {
                return formatter.DateHumanize(Localisation.TimeUnit.Millisecond, tense, 1);
            }

            if (ts < (60).minutes())
            {
                return formatter.DateHumanize(Localisation.TimeUnit.Minute, tense, Math.floor(ts.toMinutes()));
            }

            if (ts < (90).minutes())
            {
                return formatter.DateHumanize(Localisation.TimeUnit.Hour, tense, 1);
            }

            if (ts < (24).hours())
            {
                return formatter.DateHumanize(Localisation.TimeUnit.Hour, tense, Math.floor(ts.toHours()));
            }

            if (ts < (28).days())
            {
                return formatter.DateHumanize(Localisation.TimeUnit.Day, tense, Math.floor(ts.toDays()));
            }

            if (ts >= (28).days() && ts < (30).days())
            {
                var compBase2: Date = comparisonBase.atMidnight();
                compBase2.setMonth(comparisonBase.getMonth() + (tense === Localisation.Tense.Future ? 1 : -1));
                if (compBase2.getTime() === input.atMidnight().getTime())
                {
                    return formatter.DateHumanize(Localisation.TimeUnit.Month, tense, 1);
                }
                return formatter.DateHumanize(Localisation.TimeUnit.Day, tense, Math.floor(ts.toDays()));
            }

            if (ts < (645).days())
            {
                var months: number = Math.floor(ts.toDays() / 29.5);
                return formatter.DateHumanize(Localisation.TimeUnit.Month, tense, months);
            }

            var years: number = Math.floor(ts.toDays() / 365);
            if (years === 0)
            {
                years = 1;
            }
            return formatter.DateHumanize(Localisation.TimeUnit.Year, tense, years);
        }
    }
} 