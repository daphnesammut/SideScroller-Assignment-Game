#pragma strict

var timer: float = 50.0;
var countdown10: boolean;
var textStyle:GUISkin;

function Update()
{
	countdown10 = false; 
	timer -= Time.deltaTime;
	
	if (timer<=0)
	{
		timer=0;
	}
	
	if(timer ==0)
	{
		Application.LoadLevel(3);
	}
	
	if(timer<=10)
	{

		countdown10 = true; 	
	}
}

function OnGUI()
{	
	var Style : GUIStyle = new GUIStyle();
		Style.fontSize = 30;
		Style.normal.textColor = Color.red; 
		
	if(countdown10 ==true)
	{
		GUI.Label(Rect(600,80,200,80),"Time Left" + timer.ToString("0"), Style);
	}

}