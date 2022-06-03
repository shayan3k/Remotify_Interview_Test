<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class FetchMergeData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'FetchMergeData';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch and Merge Three Endpoints and Show Results';

    /**
     * The console command private properties.
     *
     * @var string
     */
    protected $client = null;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->client = new \GuzzleHttp\Client();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {


        $response = Http::withHeaders([
            'x-token' => 'removify',
            'Content-Type' => 'application/json'
        ])->get('https://service-dev.rmvfy.com/interview?source=db');



        if ($response->failed()) {
            return "Could not Locate the Endpoint Server.";
        } else {
            echo "hello world!";
            echo $response;
            // return success
        }
    }
}
