var counter = 0;
var value = 0;

function setup() {
    createCanvas (1000, 1000);
}
function draw() {
    background (255, 176, 80);
    fill (value);
    ellipse(mouseX, mouseY, 20, 20);
    
    
    

}
function mouseClicked() 
    {
        
        if (value==0)
            {
                value=255;
            }
        else 
        {
            value = 0;
        }
    }
function mouseWheel(event)
{
    
    value+=event.delta;
}
