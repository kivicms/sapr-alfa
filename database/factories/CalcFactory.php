<?php

namespace Database\Factories;

use App\Concerns\Matrix;
use App\Models\Calc;
use Illuminate\Database\Eloquent\Factories\Factory;

class CalcFactory extends Factory
{
    use Matrix;

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Calc::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $result = $this->generate(10);
        return [
            'user_id' => 1,
            'matrix' => $result['matrix'],
            'main_value' => $result['mainValue'],
            'diagonal_value' => $result['diagonalValue'],
            'sum_columns' => $result['sumColumns']
        ];
    }
}
