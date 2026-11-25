// Tower of Hanoi
// day 1 - just getting the towers to show up

// each tower is an array. last item = top disk
// 3 = biggest disk, 1 = smallest
var towers = {
  A: [3, 2, 1],
  B: [],
  C: []
};

function render() {
  ['A', 'B', 'C'].forEach(function (id) {
    for (var i = 0; i < towers[id].length; i++) {
      var size = towers[id][i];
      $('#disks-' + id).append('<div class="disk size-' + size + '">' + size + '</div>');
    }
  });
}

// no rules yet, just moves whatever from one to the other
function move(from, to) {
  var disk = towers[from].pop();
  towers[to].push(disk);
  render();
}

render();

// TODO: disks are doubling every time I call move() from the console ?????
// TODO: click to move
// TODO: rules (big disk cant go on small disk)
