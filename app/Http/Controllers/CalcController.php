<?php

namespace App\Http\Controllers;

use App\Concerns\Matrix;
use App\Http\Resources\CalcResource;
use App\Http\Resources\CalcResourceCollection;
use App\Models\Calc;
use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class CalcController
 * @package App\Http\Controllers
 */
class CalcController extends Controller
{
    use Matrix;

    /**
     * @return Calc[]|\Illuminate\Database\Eloquent\Collection
     */
    public function calcs()
    {
        return Calc::all();
    }

    /**
     * @param int $id
     * @return CalcResource
     */
    public function view(int $id): CalcResource
    {
        return new CalcResource(Calc::where('id', $id)->first());
    }

    /**
     * @param int $width
     * @return CalcResource
     */
    public function create(int $width): CalcResource
    {
        $result = $this->generate($width);

        $model = Calc::create(
            [
                'user_id' => auth()->user()->id,
                'matrix' => $result['matrix'],
                'main_value' => $result['mainValue'],
                'diagonal_value' => $result['diagonalValue'],
            ]
        );

        return new CalcResource($model);
    }
}
