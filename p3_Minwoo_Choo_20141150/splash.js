function drawSplash() {
  if (frameCount > 120) {
    scene = 1;
  }
  cgSplashName.display();
  cgDesc.display();
}
