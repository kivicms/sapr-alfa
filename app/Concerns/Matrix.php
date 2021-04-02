<?php

namespace App\Concerns;

/**
 * Trait MatrixGenerator
 * @package App\Concerns
 */
trait Matrix
{
    /**
     * @param int $width
     * @return array
     */
    private function generate(int $width): array
    {
        $matrix = [];

        for ($i = 0; $i < $width; $i++) {
            for ($j = 0; $j < $width; $j++) {
                $matrix[$i][$j] = rand(1,100);
            }
        }

        return [
            'matrix' => $matrix,
            'mainValue' => $this->calc($matrix, 'main', $width),
            'diagonalValue' => $this->calc($matrix, 'main', $width)
        ];
    }

    /**
     * @param array $array
     * @param string $method
     * @param int $width
     * @return float
     */
    private function calc(array $array, string $method, int $width): float
    {
        $sum = 0;
        $j = ($method == 'main') ? 0 : $width - 1;
        for ($i = 0; $i < $width; $i++) {
            $sum = $sum + $array[$i][$j];
            $j = ($method == 'main') ? $j + 1 : $j - 1;
        }

        return $sum;
    }
}
