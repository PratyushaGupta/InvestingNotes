var gotten = false;

document.addEventListener('DOMContentLoaded', function() {
	$('#save').click(function() {
		var input = $('#notes');

		var myNote = new SingleNote(input.val(), tabLocation);

		addNotes(myNote);
	});
});

document.addEventListener('DOMContentLoaded', function() {
	$('#keepinfo').click(function() {
		clearData();
	});
});

document.addEventListener('DOMContentLoaded', function() {
	$('#get').click(function() {
		if (!gotten)
			getData();

		gotten = true;
	});
});