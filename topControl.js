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
	$('#keepinfo').click(function() {
		clearData();
	});
});