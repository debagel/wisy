


function imp_initOptionsPage()
{
	$('td a[href^="edit.php?"]').attr('title', 'Datensatz ansehen').attr('target', '_blank');
	
	$('td img[id^="impa"]')
		//.css('cursor', 'pointer')
		//.click(function() {alert(1);})
		.attr('title', "Pfeil: Datensatz wird importiert\nGleichheitsz.: Datens�tze sind identisch\nUngleich: Datensatz wird �bersprungen\nX: Datensatz wird gel�scht");
}



function imp_initFilesPage()
{
	$('form[name="uploadform"] input[type="file"]').change(function() {
			$(this).after(AJAX_INDICATOR + ' ' + _ONEMOMENTPLEASE);
			$(this).hide();
			
			$('form[name="uploadform"]').submit();
	});
}



$().ready(function() {

	imp_initFilesPage();
	imp_initOptionsPage();
	
});


