const rocket_image = new URL("assets/rocket_exported.png?as=webp&height=100", import.meta.url);

function create_mini_rocket(x0: number, y0: number, a0: number, av: number) {
    const animation_duration = 5; // seconds
    const num_kf = 20;
    const spkf = animation_duration / num_kf;
    const angular_velocity = av * spkf; // rad/kf
    const acceleration = 400 * spkf * spkf; // px/kf^2
    let vx = 0; // px/kf
    let vy = 0; // px/kf
    const X = new Array(num_kf);
    const Y = new Array(num_kf);
    const A = new Array(num_kf);
    X[0] = 0;
    Y[0] = 0;
    A[0] = a0-Math.PI/2;
    for(let i = 1; i < num_kf; i++) {
        vx += Math.cos(A[i-1]) * acceleration;
        vy += Math.sin(A[i-1]) * acceleration;
        A[i] = A[i-1] + angular_velocity;
        X[i] = X[i - 1] + vx;
        Y[i] = Y[i - 1] + vy;
    }
    const keyframes = new Array(20)
    for(let i = 0; i < num_kf; i++) {
        keyframes[i] = {
            transform: `translate(${Math.floor(X[i])}px, ${Math.floor(Y[i])}px) rotate(${A[i]+Math.PI/2}rad)`,
        };
    }
    const rocket = document.createElement("img");
    rocket.src = rocket_image.href;
    rocket.style.position = "absolute";
    rocket.style.left = `${x0}px`;
    rocket.style.top = `${y0}px`;
    document.body.appendChild(rocket);
    const animation = rocket.animate(keyframes, {
        duration: animation_duration * 1000,
        easing: "linear",
        fill: "forwards",
    });
    animation.onfinish = () => {
        rocket.remove();
    };
}

class HeaderLogo {
    click_count = 0;
    constructor(id: string) {
        let logo = document.getElementById(id);
        logo?.addEventListener("click", this.onClick.bind(this));
    }
    onClick() {
        this.click_count++;
        if (this.click_count >= 1) {
            this.launch();
            this.click_count = 0;
        }
    }
    launch() {
        console.log("launch");
        for(let i = 0; i < 10; i++) {
            create_mini_rocket(Math.random()*screen.width, Math.random()*screen.height, Math.random()*2*Math.PI, (Math.random()-0.5));
        }
    }
}

function main() {
    new HeaderLogo("header_logo");
}

document.addEventListener("DOMContentLoaded", main);