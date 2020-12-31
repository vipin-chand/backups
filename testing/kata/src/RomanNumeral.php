<?php

namespace App;

class RomanNumeral
{
    static function genearte($number)
    {
        $result = '';

        while ($number > 0) {
            $result .= 'I';
            $number--;
        }

        return $result;
    }
}
