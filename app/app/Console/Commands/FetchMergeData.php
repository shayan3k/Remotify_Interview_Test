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

        // get the list of employees
        $employees = Http::withHeaders([
            'x-token' => 'removify',
            'Content-Type' => 'application/json'
        ])->get('https://service-dev.rmvfy.com/interview?source=db');


        // get the list of employees
        $companies = Http::withHeaders([
            'x-token' => 'removify',
            'Content-Type' => 'application/json'
        ])->get('https://service-dev.rmvfy.com/interview?source=companies');

        // check if the request has been fail
        if ($employees->failed() || $companies->failed()) {
            echo "Could not Locate the Endpoint Server.";
        } else {

            // convert the request body to array
            $companies =  json_decode($companies->getBody(), true);
            $companies = $companies['data'];

            // convert the request body to array
            $employees =  json_decode($employees->getBody(), true);
            $employees = $employees['data'];

            // print table header
            echo "id\t\tname\t\ttitle\t\tcompany_name\n";
            echo "--\t\t----\t\t-----\t\t------------\n";

            // print the information
            foreach ($employees as $key => $item) {

                $companyName = $this->getCompanyName($companies, $item['company_id']);
                echo $item['id'] . "\t\t" . $item['name'] . "\t\t" . $item['title'] . "\t\t" . $companyName  . "\n";
            }
        }
    }


    /**
     * Get the Company Name with Comapny Id
     *
     * @return int
     */
    public function getCompanyName($companies, $company_id)
    {
        // print the information
        foreach ($companies as $key => $item) {
            if ($item['company_id'] == $company_id)
                return $item['company_name'];
        }
    }
}
