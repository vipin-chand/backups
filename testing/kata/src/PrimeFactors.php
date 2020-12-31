<?php

namespace App;

class PrimeFactors
{
    public function generate($number): array
    {
        $factors = [];
        $diviser = 2;

        while ($number > 1) {
            while ($number % $diviser == 0) {
                $factors[] = $diviser;

                $number = $number / $diviser;
            }
            $diviser++;
        }

        return $factors;
    }
}
