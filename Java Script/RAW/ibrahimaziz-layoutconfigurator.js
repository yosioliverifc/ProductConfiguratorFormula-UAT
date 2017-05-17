// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.design
// built for InfoConnect Sdn Bhd - BCA Life | BCAL MPOS
// http://www.infoconnect.com.my


// INTIALIZATION

/* GLOBAL VARIABLE */

var JSONLayoutSIParse = [];


// JSON

function JSONUpdateLabelValue(JSONInput, stringJSONInputKey, stringJSONInputValue)
{
	var stringJSONKey;

	for (var i = 0; i < JSONInput.length; i++)
	{
		stringJSONKey = JSONInput[i].labelKey;

		if (stringJSONKey == stringJSONInputKey)
		{
			JSONInput[i].labelValue = stringJSONInputValue;
			i = JSONInput.length;
		}
		else
		{

		}
	}
}

function JSONUpdateInputState(JSONInput, stringJSONInputKey, stringJSONInputValue)
{
	var stringJSONKey;

	for (var i = 0; i < JSONInput.length; i++)
	{
		stringJSONKey = JSONInput[i].inputKey;

		if (stringJSONKey == stringJSONInputKey)
		{
			JSONInput[i].inputValue = stringJSONInputValue;
			i = JSONInput.length;
		}
		else
		{

		}
	}
}


// GENERATOR

function generateLayoutDirectory(JSONConfig, stringLayoutJavaScriptID)
{
	/* INITIALIZATION */

	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

	$(stringLayoutJQueryID).empty();
	
	var stringJSONProductKey;
	var stringJSONProductText;
	var JSONProductContent = [];
	var stringJSONProductState;

	var stringJSONSectionKey;
	var stringJSONSectionText;
	var JSONSection = [];
	var stringJSONSectionState;

	var stringHTML = "";

	/* PRODUCT FILTER */

	for (var i = 0; i < JSONConfig.length; i++)
	{
		stringJSONProductState = JSONConfig[i].productState;

		if (stringJSONProductState == stringStateTrue)
		{
			stringJSONProductKey = JSONConfig[i].productKey;

			if (i == 0)
			{
				stringHTML += "<ul class='DirectoryProduct'>";
			}
			else
			{

			}

			stringHTML += "<li class='ListProduct'>" + JSONConfig[i].productText;
			stringHTML += "<input type='button' class='ButtonAddSecondary ButtonIcon'>";
			JSONProductContent = JSONConfig[i].productContent;
			
			if (JSONProductContent.length != 0)
			{
				/* SECTION FILTER */

				for (var j = 0; j < JSONProductContent.length; j++)
				{
					stringJSONSectionState = JSONProductContent[j].sectionState;

					if (stringJSONSectionState == stringStateTrue)
					{
						if (j == 0)
						{
							stringHTML += "<br><ul class='DirectorySection'>";
						}
						else
						{

						}

						/* PRINT LIST */

						stringJSONSectionKey = JSONProductContent[j].sectionKey;
						stringHTML += "<li class='ListSection'>" + JSONProductContent[j].sectionText;
						stringHTML += "<input type=\"button\" class=\"ButtonDeleteSecondary ButtonIcon\" onclick=\"generateLayoutSection('LayoutContainer', JSONLayoutSIParse, '" + stringJSONProductKey + "', '" + stringJSONSectionKey + "')\">";
						stringHTML += "<input type=\"button\" class=\"ButtonEditSecondary ButtonIcon\" onclick=\"generateLayoutSection('LayoutContainer', JSONLayoutSIParse, '" + stringJSONProductKey + "', '" + stringJSONSectionKey + "')\">";
						stringHTML += "</li>";
					}
					else
					{

					}
				}

				stringHTML += "</ul>";
			}
			else
			{
				
			}

			stringHTML += "</li>";
		}
		else
		{

		}
	}

	$(stringLayoutJQueryID).html(stringHTML);
}

function generateLayoutSection(stringLayoutJavaScriptID, JSONProduct, stringProductKey, stringSectionKey)
{
	/* INITIALIZATION */

	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

	var JSONSection = [];
	var JSONSectionContent = [];
	var JSONFieldset = [];
	var JSONQuestion = [];
	var JSONInput = [];

	var stringJSONSectionKey;
	var stringJSONSectionState;

	/* PRODCUT FILTER */
	
	for (var i = 0; i < JSONProduct.length; i++)
	{
		stringJSONProductKey = JSONProduct[i].productKey;
		
		if (stringJSONProductKey == stringProductKey)
		{
			JSONSection = JSONProduct[i].productContent;

			/* SECTION FILTER */

			for (var j = 0; j < JSONSection.length; j++)
			{
				stringJSONSectionKey = JSONSection[j].sectionKey;

				if(stringJSONSectionKey == stringSectionKey)
				{
					JSONSectionContent = JSONSection[j].sectionContent;
					JSONFieldset = JSONSectionContent.fieldset;
					JSONQuestion = JSONSectionContent.question;
					JSONInput = JSONSectionContent.input;
					
					j = JSONSection.length;
				}
				else
				{

				}
			}
			
			i = JSONProduct.length;
		}
		else
		{

		}
	}

	/* PRINT FIELDSET */

	var stringJSONFieldsetKey;
	var stringJSONFieldsetState;
	var stringJSONFieldsetLegend;

	var stringHTMLFieldset = "";
	
	$(stringLayoutJQueryID).empty();

	if (JSONFieldset.length != 0)
	{
		JSONFieldset = JSONSort(JSONFieldset, "fieldsetOrder");
		
		for (var i = 0; i < JSONFieldset.length; i++)
		{
			stringJSONFieldsetState = JSONFieldset[i].fieldsetState;

			if (stringJSONFieldsetState == stringStateTrue)
			{
				stringJSONFieldsetKey = JSONFieldset[i].fieldsetKey;
				stringJSONFieldsetLegend = JSONFieldset[i].fieldsetLegend;

				stringHTMLFieldset += "<fieldset id='" + stringJSONFieldsetKey + "' class='FieldsetContainer'>";
				stringHTMLFieldset += "<hgroup>";
				stringHTMLFieldset += "<h3>" + stringJSONFieldsetLegend + "</h3><h4>" + stringPrefixFieldset + "</h4>";
				stringHTMLFieldset += "</hgroup>";
				stringHTMLFieldset += "</fieldset>";
			}
			else
			{

			}
		}
		alert(stringHTMLFieldset);
		$(stringLayoutJQueryID).append(stringHTMLFieldset);
	}
	else
	{
		
	}

	/* PRINT QUESTION */

	var stringJSONQuestionKey;
	var stringJSONQuestionState;
	var stringJSONQuestionLegend;

	var stringHTMLQuestion = "";
	var stringJSONQuestionFieldsetJQueryID;
	var stringJSONQuestionFieldsetKey;
	
	if (JSONQuestion.length != 0)
	{
		JSONQuestion = JSONSort(JSONQuestion, "questionOrder");
		
		for (var i = 0; i < JSONQuestion.length; i++)
		{
			stringJSONQuestionState = JSONQuestion[i].questionState;

			if (stringJSONQuestionState == stringStateTrue)
			{
				stringJSONQuestionKey = JSONQuestion[i].questionKey;
				stringJSONQuestionFieldsetKey = JSONQuestion[i].fieldsetKey;

				stringHTMLQuestion = "";
				stringHTMLQuestion += "<div id='" + stringJSONQuestionKey + "' class='QuestionContainer'>";
				stringHTMLQuestion += "<hgroup>";
				stringHTMLQuestion += "<h4>" + stringJSONQuestionKey + "</h4><h5>" + stringPrefixQuestion + "</h5>";
				stringHTMLQuestion += "</hgroup>";
				stringHTMLQuestion += "</div>";

				stringJSONQuestionFieldsetJQueryID = stringKres + stringJSONQuestionFieldsetKey;
				$(stringJSONQuestionFieldsetJQueryID).append(stringHTMLQuestion);
			}
			else
			{

			}
		}
	}
	else
	{
		
	}

	/* PRINT INPUT */

	var stringJSONInputKey;
	var stringJSONInputState;
	var stringJSONInputLabelValue;

	var stringHTMLInput = "";
	var stringJSONInputQuestionJQueryID;
	var stringJSONInputQuestionKey;
	
	if (JSONInput.length != 0)
	{
		JSONInput = JSONSort(JSONInput, "inputOrder");
		
		for (var i = 0; i < JSONInput.length; i++)
		{
			stringJSONInputState = JSONInput[i].inputState;

			if (stringJSONInputState != stringStateFalse)
			{
				stringJSONInputKey = JSONInput[i].inputKey;
				stringJSONInputQuestionKey = JSONInput[i].questionKey;
				stringHTMLInput = "";
				stringHTMLInput += "<div id='" + stringJSONInputKey + "' class='InputContainer'>";
				stringHTMLInput += "<hgroup>";
				stringHTMLInput += "<h5>" + stringJSONInputKey + "</h5><h6>" + stringPrefixInput + "</h6>";
				stringHTMLInput += "</hgroup>";
				stringHTMLInput += "</div>";

				stringJSONInputQuestionJQueryID = stringKres + stringJSONInputQuestionKey;
				$(stringJSONInputQuestionJQueryID).append(stringHTMLInput);
			}
			else
			{

			}
		}
	}
	else
	{
		
	}
}