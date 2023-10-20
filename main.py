def on_button_a():
    for index in range(10):
        basic.set_led_color(0x00ffff)
        basic.pause(100)
        basic.set_led_color(0xff00ff)
        basic.pause(100)
    basic.set_led_color(0x00ffff)
    basic.pause(2000)
    basic.set_led_color(0x000000)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    music.play_melody("E D G F B A C5 B ", 120)
    music.play_melody("E B C5 A B G A F ", 120)
    music.play_melody("C5 B A G F E D C ", 500)
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    global zufallszahl
    zufallszahl = randint(0, 2)
    if zufallszahl == 0:
        basic.show_leds("""
            . . . # #
                        # . # # #
                        . # . . .
                        # . # # #
                        . . . # #
        """)
    if zufallszahl == 1:
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
    if zufallszahl == 2:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

zufallszahl = 0
startzufallszahl = randint(0, 4)
if startzufallszahl == 0:
    pass