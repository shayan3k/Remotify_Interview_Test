<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class ISeed extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:iseed';

    /**
     * The name and signature of the console command.
     *
     * @var string
     *
     */
    private $tables = 'admins,settings,users,videos,ads,genres,comments,favorites,payments';



    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Artisan::call("iseed $this->tables --force");
        return 0;
    }
}
