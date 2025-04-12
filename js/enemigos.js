class Enemy {
    constructor(map, x, y, img) {
        this.map = map;
        this.x = x;
        this.y = y;
        this.width = map.tsize;
        this.height = map.tsize;
        this.image = img.getImage('enemy');
        this.speed = 200; // ajusta la velocidad a algo más realista
        this.screenX = 0;
        this.screenY = 0;
    }

    move(delta) {
        // Movimiento aleatorio suave
        const dirx = Math.random() > 0.5 ? 1 : -1;
        const diry = Math.random() > 0.5 ? 1 : -1;

        this.x += dirx * this.speed * delta;
        this.y += diry * this.speed * delta;

        // Limitar dentro del mapa
        const maxX = this.map.cols * this.map.tsize - this.width;
        const maxY = this.map.rows * this.map.tsize - this.height;
        this.x = Math.max(0, Math.min(this.x, maxX));
        this.y = Math.max(0, Math.min(this.y, maxY));
    }

    updateScreenPosition(camera) {
        // Actualiza las coordenadas en pantalla respecto a la cámara
        this.screenX = this.x - camera.x;
        this.screenY = this.y - camera.y;
    }

    draw(ctx) {
        // Dibuja al enemigo en pantalla
        ctx.drawImage(this.image, this.screenX, this.screenY, this.width, this.height);
    }
}
