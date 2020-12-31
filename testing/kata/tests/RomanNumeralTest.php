<?php

declare(strict_types=1);

use App\RomanNumeral;
use PHPUnit\Framework\TestCase;

class RomanNumeralTest extends TestCase
{
    /** 
     * @test
     * @dataProvider checks
     */

    function it_generates_the_roman_numeral_for_number($number, $expected)
    {
        $this->assertEquals($expected, RomanNumeral::genearte($number));
    }

    function checks()
    {
        return [
            [1, 'I'],
            [2, 'II'],
            [3, 'III'],
            [4, 'IV']
        ];
    }
}
