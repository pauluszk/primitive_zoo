<?php

namespace App\Http\Controllers;

use App\Models\Classification;
use Illuminate\Http\Request;
use stdClass;

class ClassificationController extends Controller
{

    public function getClassificationTree()
    {

        $classes = Classification::all();


        $hierarchy = $this->buildHierarchy($classes);


        return response()->json($hierarchy);
    }

    private function buildHierarchy($classes, $parentId = null)
    {
        $hierarchy = [];

        foreach ($classes as $class) {
            if ($class->upper_class == $parentId) {
                $child = [
                    'class_id' => $class->class_id,
                    'name' => $class->name,
                    'level' => intval($class->level),
                    'children' => $this->buildHierarchy($classes, $class->class_id),
                ];

                $hierarchy[] = $child;
            }
        }

        return $hierarchy;
    }
}
