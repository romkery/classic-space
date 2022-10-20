varying vec3 vertexNormal;

void main() {
    float intensity = pow(.7 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 1.5);
    gl_FragColor = vec4(0.2, 0.5, 0.9, 1.8) * intensity;
}
