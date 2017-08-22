/*
    0 - blueFloor
    1 - brownBackground
    2 - top of floor
    3 - secret
*/

var map = [
            [ 1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,2,2,1,1,1,
              1,1,1,1,2,0,0,1,1,1,
              1,1,2,2,0,0,0,1,1,1,
              2,2,0,0,0,0,0,2,2,2,
              0,0,0,0,0,0,0,0,0,0
            ],
            [ 1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,2,2,
              1,1,1,1,1,1,1,1,0,0,
              1,1,1,1,2,2,2,1,1,1,
              1,1,1,1,0,0,0,1,1,1,
              1,1,2,2,1,1,1,1,1,1,
              2,2,0,0,2,2,2,2,2,2,
              0,0,0,0,0,0,0,0,0,0
            ],
            [ 1,1,1,1,1,1,1,1,1,2,
              1,1,1,1,1,1,2,2,1,0,
              1,1,1,2,2,1,0,0,1,1,
              2,2,1,0,0,1,1,1,1,1,
              0,0,1,1,1,1,2,1,1,1,
              1,1,1,1,1,2,0,1,1,1,
              1,1,1,1,2,0,0,1,1,1,
              1,1,2,2,0,0,0,1,1,1,
              2,2,0,0,0,0,0,2,2,2,
              0,0,0,0,0,0,0,0,0,0
            ],
            [ 2,2,2,2,2,1,1,1,1,1,
              0,0,0,0,0,1,1,1,1,1,
              1,1,1,1,1,1,2,2,1,1,
              1,1,1,1,1,1,0,0,1,1,
              1,1,1,1,1,1,1,1,1,2,
              1,1,1,1,1,2,1,1,1,0,
              1,1,1,1,2,0,1,1,2,2,
              1,1,2,2,0,0,2,2,0,0,
              2,2,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0
            ],
            [ 1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              2,2,1,1,1,1,1,1,1,1,
              0,0,1,1,1,1,1,1,1,1,
              2,0,1,1,1,1,2,1,1,1,
              0,0,1,1,1,2,0,1,1,1,
              1,1,1,1,2,0,0,1,1,1,
              1,1,2,2,0,0,0,1,1,1,
              2,2,0,0,0,0,0,2,2,2,
              0,0,0,0,0,0,0,0,0,0
            ],
            [ 1,1,1,1,2,1,1,1,1,1,
              1,1,1,1,0,1,1,1,1,1,
              1,1,2,1,1,1,2,1,1,1,
              1,2,0,2,1,1,0,1,1,1,
              1,0,0,0,1,1,0,1,1,1,
              1,1,1,1,1,2,0,1,1,1,
              1,1,1,1,2,0,0,1,1,1,
              1,1,2,2,0,3,3,1,1,1,
              2,2,0,3,3,3,0,2,2,2,
              0,0,0,0,0,0,0,0,0,0
            ],
            [ 1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,2,1,1,1,
              1,1,1,1,1,2,0,1,1,1,
              1,1,1,1,2,0,0,1,1,1,
              1,1,2,2,0,0,0,1,1,1,
              2,2,0,0,0,0,0,2,2,2,
              0,0,0,0,0,0,0,0,0,0
            ],
            [ 1,1,1,1,2,1,1,0,0,0,
              1,1,1,1,0,1,1,2,2,1,
              1,1,2,2,1,1,1,0,0,1,
              1,1,0,0,1,2,1,1,1,1,
              1,1,1,1,2,0,1,1,1,1,
              1,1,1,2,0,0,1,1,1,1,
              1,1,2,0,0,0,1,1,1,1,
              1,2,0,0,0,0,1,1,1,1,
              2,0,0,0,0,0,1,1,1,1,
              0,0,0,0,0,0,1,1,1,1
            ],

];


function drawMap(map) {

  var i = 0;
  //var name = 0;

  for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 10; x++) {
      var tile_x = x * block_w;
      var tile_y = y * block_h;

      var tileType = map[i];

      if (tileType === 0 || tileType === 3) {
        water.draw(tile_x,tile_y);
      } else if (tileType === 1) {
        wall.draw(tile_x,tile_y);
      } else if (tileType === 2) {
        /*points_obj[name] = new Point(tile_x, tile_y);
        points_obj[name].draw(10,'yellow');*/
        wall_bottom.draw(tile_x,tile_y);
      }
      i++;
      //name++;
    }
  }

}
