import pygame

pygame.init()

screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("MY FIRST VIDEOGAME")

running = True

# Constantes de posicion player

INITIAL_POSITION_X = 100
INITIAL_POSITION_Y = 100

player_x = INITIAL_POSITION_X
player_y = INITIAL_POSITION_Y
player_with = 10
player_height = 20

# Objetivo o meta

goal_x = 700
goal_y = 500
goal_width = 50
goal_height = 50

# Obstacle

obstacle_x = 300
obstacle_y = 400
obstacle_width = 30
obstacle_height = 40

# Mecanicas
has_won = False
has_lost = False

player_color = (0, 0, 235)

while running:

    goal_no_collision = (
        player_x + player_with < goal_x 
        or player_x > goal_x + goal_width 
        or player_y + player_height < goal_y 
        or player_y > goal_y + goal_height
    )

    is_far_from_obstacle = (
        player_x + player_with < obstacle_x
        or player_x > obstacle_x + obstacle_width
        or player_y + player_height < obstacle_y
        or player_y > obstacle_y + obstacle_height
    )

    for event in pygame.event.get():
        
        if event.type == pygame.QUIT:
            running = False
    
    keys = pygame.key.get_pressed() # Esta instruccion para las teclas


    if not has_won and not has_lost:
        if player_x < 800 - player_with:

            if keys[pygame.K_d]:
                player_x += 0.05

        if player_x > 10 - player_with:

            if keys[pygame.K_a]:
                player_x -= 0.05

        #Movimieno vertical
        if player_y > 20 - player_height:

            if keys[pygame.K_w]:
                player_y -= 0.05

            if player_y < 600 - player_height:

                if keys[pygame.K_s]:
                    player_y += 0.05

        if goal_no_collision:
            print("Esta separado")
        else:
            if not has_won:
                print("Has ganado")
                player_color = (0, 215, 0)

            has_won = True


        if is_far_from_obstacle:
            print("Entro en este if")
        else: 
            if not has_lost:
                print("Has perdido")
                player_color = (255, 10, 10)


            has_lost = True

    screen.fill((0, 0, 0)) #Pinta la pantalla de negro

    pygame.draw.rect(
        screen,
        player_color,
        (player_x, player_y, player_with, player_height)
    )

    pygame.draw.rect(
        screen,
        (255, 255, 0),
        (goal_x, goal_y, goal_width, goal_height)
    )

    pygame.draw.rect(
        screen,
        (234, 2, 2),
        (obstacle_x, obstacle_y, obstacle_width, obstacle_height)
    )


    pygame.display.flip()

pygame.quit()