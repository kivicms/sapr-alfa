<?php

namespace App\Http\Controllers;

use App\Http\Resources\CalcResourceCollection;
use App\Models\Calc;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CalcController extends Controller
{

    /**
     * @return ResourceCollection
     */
    public function calcs(): ResourceCollection
    {
        $user = auth()->user();
        $models = Calc::where('user_id', $user->id)->all();

        return CalcResourceCollection::collection($models);
    }

    /**
     * @return JsonResponse
     */
    public function generate()
    {
        $width = 10;
        $matrix = [];

        for ($i = 0; $i < $width; $i++) {
            for ($j = 0; $j < $width; $j++) {
                $matrix[$i][$j] = rand(100);
            }
        }

        return response()->json(
            [
                'matrix' => $matrix,
                'mainValue' => $this->calc($matrix, 'main', $width),
                'diagonalValue' => $this->calc($matrix, 'main', $width)
            ]
        );
    }

    /**
     * @param array $array
     * @param string $method
     * @param int $width
     * @return float
     */
    protected function calc(array $array, string $method, int $width): float
    {
        $sum = 0;
        if ($method == 'main') {
            $j = 1;
        } else {
            $j = $width;
        }
        for ($i = 0; $i < $width; $i++) {
            $sum = $sum + $array[$i][$j];
            if ($method == 'main') {
                $j++;
            } else {
                $j--;
            }
        }
        return $sum;
    }
}
