Explanation of Key Features
Rotation:
The triangle rotates to face the mouse cursor using Math.atan2 to calculate the angle between the triangle's position and the mouse position in clip space.
Rotation is applied in the vertex shader using a rotation matrix.
Movement:
Left-click applies a thrust force in the direction of the triangle's narrow end (top vertex), calculated using Math.cos and Math.sin based on the current rotation.
Velocity is updated each frame, with damping (0.99 factor) to simulate space friction.
Screen wrapping ensures the triangle reappears on the opposite side when it moves off-screen.
Input Handling:
Mouse movement updates rotation continuously.
Mouse down/up events toggle thrusting, ensuring smooth control.
Right-click context menu is disabled to avoid interruptions.
Visuals:
Pastel colors are used for the triangle and background, maintaining the aesthetic from the previous version.
Triangle size is slightly increased for better visibility in a game context.
Instructions:
The overlay clearly explains mouse controls for rotation and thrusting.
Performance:
Delta time ensures consistent movement across different frame rates.
requestAnimationFrame drives the animation loop for smooth rendering.
How to Extend for a Full Asteroids Game
To make this a complete Asteroids game, you could add:

Asteroids: Generate multiple objects with random positions, velocities, and rotations, rendered as polygons.
Collision Detection: Check for intersections between the triangle and asteroids.
Projectiles: Add a shooting mechanic (e.g., on right-click) to fire small shapes from the triangle's narrow end.
Scoring and Lives: Track player progress and add a game-over state.
Particle Effects: Enhance visuals with thrust particles or explosion effects.
These additions would require additional vertex buffers, collision logic, and game state management, but the current code provides a solid foundation with best-practice input handling and physics for an Asteroids-like experience.
