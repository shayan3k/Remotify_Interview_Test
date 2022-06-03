<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PlayersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('players')->delete();

        \DB::table('players')->insert(array(
            0 =>
            array(
                'id' => 1,
                'name' => 'Ted Mosby',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis voluptate vel nemo quidem veritatis dolore laborum itaque ab animi quo autem repellendus tenetur eaque reprehenderit. Labore quae ducimus atque?',
                'age' => '12',
                'created_at' => '2021-06-03 10:23:07',
                'updated_at' => '2021-06-03 11:24:14',
            ),
            1 =>
            array(
                'id' => 2,
                'name' => 'Marshall Eriksen',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis voluptate vel nemo quidem veritatis dolore laborum itaque ab animi quo autem repellendus tenetur eaque reprehenderit. Labore quae ducimus atque?',
                'age' => '24',
                'created_at' => '2021-06-03 10:23:07',
                'updated_at' => '2021-06-03 11:24:14',
            ),
            2 =>
            array(
                'id' => 3,
                'name' => 'Lily Aldrin',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis voluptate vel nemo quidem veritatis dolore laborum itaque ab animi quo autem repellendus tenetur eaque reprehenderit. Labore quae ducimus atque?',
                'age' => '12',
                'created_at' => '2021-06-03 10:23:07',
                'updated_at' => '2021-06-03 11:24:14',
            ),
            3 =>
            array(
                'id' => 4,
                'title' => 'Robin Scherbatsky',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis voluptate vel nemo quidem veritatis dolore laborum itaque ab animi quo autem repellendus tenetur eaque reprehenderit. Labore quae ducimus atque?',
                'age' => '12',
                'created_at' => '2021-06-03 10:23:07',
                'updated_at' => '2021-06-03 11:24:14',
            ),
        ));
    }
}
