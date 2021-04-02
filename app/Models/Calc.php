<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calc extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'matrix', 'main_value', 'diagonal_value'];

    protected $casts = [
        'matrix' => 'array',
    ];
}
