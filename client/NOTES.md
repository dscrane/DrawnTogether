association <---> radius
interest <---> saturation/lightness
gender <---> degree (0-360)
age <---> orbital
diet <---> quadrant 
time <---> orbital shift
money <---> radius shift 
hair <---> degree shift multiplier
food <---> degree shift 
nature <---> stroke, ring, hollow
media <---> major position shift (revert to original, invert, double, ...)
religion <---> major color shift (revert to original, inverse, complimentary, ...)
culture <---> stroke/ring design (dotted, dashed, faded, ....)
color <---> alter color palette



saturation = Math.floor(Math.random(height, 100)) - height
lightness = Math.floor(Math.random(10, height)) + height 
hue = degree 


alternate design examples
hollow circle: 
    <circle
        cx=altXCord
        cy=altYCord
        r=circleRadius - (.5 * designStroke)
        strokeWidth=designStroke
        stroke=designColor
        fill="none"
    />
    
stroked circle:
    <circle
        cx=altXCord
        cy=altYCord
        r=circleRadius - (.5 * designStroke)
        strokeWidth=designStroke
        stroke=designColor
        fill=fillColor
    />
    
ringed circle: 
    <circle
        cx=altXCord
        cy=altYCord
        r=circleRadius - (2 * designStroke)
        fill=fillColor
    />
    <circle
        cx=altXCord
        cy=altYCord
        r=circleRadius - (.5 * designStroke)
        strokeWidth=designStroke
        stroke=designColor
        fill="none"
    />
    
dot circle:
    <circle
        cx=altXCord
        cy=altYCord
        r=circleRadius - (.5 * designStroke)
        strokeWidth=designStroke
        stroke=fillColor
        fill=designColor
    />
