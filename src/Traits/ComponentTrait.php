<?php

namespace Coroowicaksono\ChartJsIntegration\Traits;

trait ComponentTrait
{

    public function getDataUri(string $uri)
    {
        return $this->withMeta(['dataUri' => $uri]);
    }
}