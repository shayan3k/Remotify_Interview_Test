# Hi Chiristine! ✌(ツ)

To get started with the project, I have to explain a bit about the project and the project structed as it is a linux host friendly structred ready to be deploy, so that you could follow easier.

## Test 1/2 - DB Script

For the first part of the test, I have implemented a CRUD operation with works with Laravel Elequent PDO, Stores data, retrive, edit and remove records from database.

To get started with the project, first please create a database with the name (DB_DATABASE=remotify_interview_test) with phpmyadmin or any other database you like, but remember to change the DB_CONNECTION accordingly.

afterwards run the following command to migrate and seed the database

<code>
      cd app && php artisan migrate:fresh --seed --force
</code>

to run the project, you do not need to install vendor and node_modules as I have configured .gitignore for easier use.

<code>
      php artisan serve
</code>

furthermore, It was possible to dockerize the project but I believe in this case it would be a overkill.

I have used my preffered dashboard from my previous projects for this assignment as it had all the nessesary structures. I created a model file, migration, seeder, controller, edited web.php and view files in resource directory.

## Test 2/2 - Performance Script

For this assignement, luckly, I had to deal with a single file which is stored in /app/app/Console/Commands/FetchMergeData.php

Optimization is a must in this assignment so I tried to make my api calls as minimal as possible to print the result like the sample.

It also worth noteing that the mentioned api in PDF file were not always returning data properly and sometimes do not work. Since there was no detail stating this issue, I did not add any extra validation.

If you faced the issue, rerun the command

<code>
cd app && php artisan FetchMergeData
</code>

Please do not hasitate to ask if you need something,
Thanks,
Shayan3k
