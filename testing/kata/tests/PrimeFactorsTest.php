<?php

declare(strict_types=1);

use App\PrimeFactors;
use PHPUnit\Framework\TestCase;

class PrimeFactorsTest extends TestCase
{
    /** 
     * @test 
     * @dataProvider factors
     */
    function it_generates_prime_factor_for_1($number, $expected)
    {
        $factors = new PrimeFactors;
        $this->assertEquals($expected, $factors->generate($number));
    }

    function factors()
    {
        return [
            [1, []],
            [2, [2]],
            [3, [3]],
            [4, [2, 2]]
        ];
    }
}
