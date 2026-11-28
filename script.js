// Tower of Hanoi
// day 2 - click to move + first try at the rules

// each tower is an array. last item = top disk
// 3 = biggest disk, 1 = smallest
var towers = {
  A: [3, 2, 1],
  B: [],
  C: []
};

var moveCount = 0;
var selected = null; // which tower is picked up right now

function render() {
  ['A', 'B', 'C'].forEach(function (id) {
    $('#disks-' + id).empty(); // fixes the doubling thing, forgot to clear it lol
    for (var i = 0; i < towers[id].length; i++) {
      var size = towers[id][i];
      $('#disks-' + id).append('<div class="disk size-' + size + '">' + size + '</div>');
    }
  });
  $('#move-count').text(moveCount);
}

function tryMove(from, to) {
  var moving = towers[from][towers[from].length - 1];
  var target = towers[to][towers[to].length - 1];

  moveCount++;

  // rule: can't put a disk on a smaller one
  if (target !== undefined && moving < target) {
    $('#message').text('You cannot place that disk there!');
    return;
  }

  towers[to].push(towers[from].pop());
  $('#message').text('Moved ' + from + ' to ' + to);
  render();
}

$('.tower').click(function () {
  var id = $(this).attr('data-tower');

  if (selected === null) {
    selected = id;
    $(this).addClass('selected');
  } else {
    tryMove(selected, id);
    $('.tower').removeClass('selected');
    selected = null;
  }
});

render();

// TODO: win check
// TODO: reset button
// TODO: something is off, I can put the big disk on top of the small one??
// TODO: clicking an empty tower first breaks everything (undefined shows up)
