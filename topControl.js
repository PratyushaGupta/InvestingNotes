var gotten = false;

document.addEventListener('DOMContentLoaded', function() {
	$('#save').click(function() {
		var input = $('#notes');

		var myNote = new SingleNote(input.val(), tabLocation);

		addNotes(myNote);

		$('#notes').val(null);
	});
});

document.addEventListener('DOMContentLoaded', function() {
	$('#clearcomp').click(function() {
		clearData();
	});
});

document.addEventListener('DOMContentLoaded', function() {
	$('#newcomp').click(function() {
		var title = prompt("What is the name of the company you're working on?");

		if (title != null) {
			newComp(title);
		};
	});
});