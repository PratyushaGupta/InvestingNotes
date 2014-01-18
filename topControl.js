var gotten = false;

document.addEventListener('DOMContentLoaded', function() {
	$('#save').click(function() {

		if (currcomp == null) {
			var title = prompt("What is the name of the company you're working on?");

			if (title != null)
				newComp(title);
		}


		var input = $('#notes');

		if (input.val() != "") {
			var myNote = new SingleNote(input.val(), tabLocation);
			addNotes(myNote);
		}

		else
			alert("Please type something!");

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

document.addEventListener('DOMContentLoaded', function() {
	$('#loadcomp').click(function() {
		loadComp();
	});
});