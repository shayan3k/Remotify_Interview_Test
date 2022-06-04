# Hi Chiristine! ✌(ツ)

To get started with the project, I believe, I have to explain a bit about it and the project's structure as it is a linux host friendly structured ready to be deployed.

## Test 1/2 - DB Script

For the first part of the test, I have implemented a CRUD operation which works with Laravel Elequent PDO and Stores, retrive, edit and remove records from database.

To get started with the project, first please create a database with the name (DB_DATABASE=remotify_interview_test) using mysql or any other database you like, but remember to change the DB_CONNECTION accordingly.

Afterwards run the following command to migrate and seed the database

<code>
      cd app && php artisan migrate:fresh --seed --force
</code>

to run the project use the following command, you do not need to install vendor and node_modules as I have configured .gitignore for easier use.

<code>
      php artisan serve
</code>


furthermore, It was possible to dockerize the project but I believe in this case it would be an overkill.

I have used my preferred dashboard from my previous projects for this assignment as it had all the nessesary structures. I created a model file, migration, seeder, controller, edited web.php in route and view files in resource directory.

## Test 2/2 - Performance Script

For this assignement, luckly, I had to deal with a single file which is stored in /app/app/Console/Commands/FetchMergeData.php

Optimization is a must in this assignment so I tried to make my api calls as minimal as possible to print the result like the sample.

It also worth noteing that the mentioned api in PDF file were not always returning data properly and sometimes do not work. Since there was no detail stating this issue, I did not add any extra validation.

If you faced the issue, rerun the command

<code>
cd app && php artisan FetchMergeData
</code>
<br/>
<br/>
<br/>

##Please do not hasitate to ask if you need anything,
Thanks,
Shayan3k
