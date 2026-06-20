// 1. PLACE ALL FUNCTIONS AT THE TOP
function createHeart() {
    const h = document.createElement('div');
    h.className = 'heart';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animation = `floatUp ${Math.random() * 4 + 4}s linear forwards`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 8000);
}

function spawnSparkles() {
    for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.width = sparkle.style.height = (Math.random() * 4 + 3) + 'px';
        sparkle.style.animationDelay = (Math.random() * 3) + 's';
        document.body.appendChild(sparkle);
    }
}

function createRosePetal() {
    const petal = document.createElement('div');
    petal.className = 'rose-petal';
    const size = Math.random() * 15 + 12;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-30px';
    const duration = Math.random() * 5 + 6;
    const drift = (Math.random() - 0.5) * 200;
    petal.animate([
        { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 0 },
        { opacity: 0.9, offset: 0.1 },
        { transform: `translateY(105vh) translateX(${drift}px) rotate(360deg)`, opacity: 0 }
    ], { duration: duration * 1000, easing: 'linear', fill: 'forwards' });
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), duration * 1000);
}

// 2. NOW START THE ENGINE
document.addEventListener("DOMContentLoaded", () => {
    // Start the decorations
    setInterval(createHeart, 400);
    spawnSparkles();
    setInterval(createRosePetal, 700);

    // Then call your existing render function
    if (typeof render === 'function') {
        render();
    }
});

function playMusic() {
    const audio = document.getElementById('bg-music');
    if (audio) {
        audio.play().catch(error => {
            console.log("Autoplay prevented, waiting for user interaction.");
        });
    }
}
// ==========================================
// 1. ENGINE INITIALIZATION & GLOBAL STATES
// ==========================================
let step = 1;
const app = document.getElementById("app");
const canvas = document.getElementById("particle-canvas");

// Action Subsystem Tracking Indexes
let askIndex = 1;
let answerIndex = 1;
let askCompleted = false;
let answerCompleted = false;

// Memory Arrays to capture her inputs
let savedUserQuestions = [];
let savedUserAnswers = [];

// Pre-defined Custom Sentences for the "Answer" Mode
const myQuestionsArray = [
    "What is your absolute favorite memory of us together? 😊",
    "If we could travel anywhere right now, where would we go? ✈️",
    "What is one secret wish you want to come true this year? 🌟",
    "How much do you love me? (Be honest!) 🥰",
    "What is the nicest thing I have ever done for you? ❤️"
];

// Save the letter content safely into memory before the DOM changes
let preservedLetterText = "";
document.addEventListener("DOMContentLoaded", () => {
    const hiddenLetterEl = document.getElementById("hidden-letter");
    if (hiddenLetterEl) {
        preservedLetterText = hiddenLetterEl.innerText;
    } else {
        preservedLetterText = `Dearest Rahima,\n\nHappy Birthday! You mean the absolute world to me.\nMay this beautiful day bring you endless reasons to smile,\nand may your year ahead be filled with warmth, love, and joy.\n\nThank you for being the wonderful person you are.`;
    }

    if (app) {
        render();
    } else {
        console.error("Fatal Script Execution Error: Component anchor node '#app' missing.");
    }
});

// ==========================================
// 2. RENDERING ENGINE
// ==========================================
function render() {
    if (!app) return;
    app.removeAttribute('style');

    if (step === 1) {
        app.className = "container";
        app.innerHTML = `
            <h1>Hello Madam</h1>
            <p style="margin: 15px 0; font-size: 1.2rem;">It's your special day! ❤️</p>
            <button onclick="next()">Continue 💕</button>
        `;
    } else if (step === 2) {
        app.className = "container";
        app.innerHTML = `
            <h1>Have a look</h1>
            <p style="margin: 15px 0; font-size: 1.2rem;">Everything here is made for you.</p>
            <button onclick="next()">Continue 💕</button>
        `;
    } else if (step === 3) {
        app.className = "container";
        app.innerHTML = `
            <h1>Ready to get my love?</h1>
            <div style="margin-top: 20px;">
                <button onclick="blastEffect()">Yes ❤️</button>
                <button id="no-btn" onmouseover="moveNo()" onclick="moveNo()">No 😢</button>
            </div>
        `;
    }
}

function next() {
    playMusic(); // Music starts on the first click
    step++;
    render();
}

// ==========================================
// 3. EVASIVE INTERACTION LOGIC (NO BUTTON)
// ==========================================
function moveNo() {
    const btn = document.getElementById('no-btn');
    // Ensure it stays within 80% of the screen width/height
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    btn.style.position = 'absolute';
    btn.style.left = x + 'vw';
    btn.style.top = y + 'vh';
}

// ==========================================
// 4. BLAST TRANSITION ANIMATION GRAPHICS
// ==========================================
function blastEffect() {
    playMusic(); // Ensure it stays active
    app.style.display = 'none';
    if (!canvas) return;
    canvas.style.display = "block";

    setTimeout(() => {
        canvas.style.display = "none";
        loadCelebrationScreen();
    }, 1000);
}

// ==========================================
// 5. CELEBRATION MASTER CONTENT DESIGN
// ==========================================
function loadCelebrationScreen() {
    document.body.innerHTML = `
        <div class="final-screen">
            <div class="card-border">
                <div class="top-row">
                    <div class="calendar-box">
                        <h3>JUNE 2026</h3>
                        <div class="calendar-grid day-labels">
                            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                        </div>
                        <div class="calendar-grid">
                            <div></div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
                            <div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div>
                            <div>14</div><div>15</div><div>16</div><div>17</div><div>18</div><div >19</div><div class="special-day">20</div>
                            <div>21</div><div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div>
                            <div>28</div><div>29</div><div>30</div>
                        </div>
                    </div>
                    <div class="dreamcatcher-graphic">🌸</div>
                </div>
                
                <div class="photo-collage-area" id="collage-target"></div>
                
                <div class="vintage-signature">Best Wishes</div>
            </div>

            <div class="typewriter-header">Happy Birthday Rahima!</div>

            <div class="right-content-wrapper">
                <div class="cake-container" id="cake-node" onclick="triggerCakeInteraction()">
                    <div class="cake-candle">
                        <div class="candle-flame" id="flame-node"></div>
                    </div>
                    <div class="cake-body" id="cake-body-node"></div>
                    <div class="cake-plate"></div>
                </div>
                <div class="cake-quote" id="quote-node">Click the cake to blow the candle!</div>
            </div>

            <div class="picture-design-bg" id="bg-graphics"></div>
        </div>
    `;

    setTimeout(buildBackgroundGraphics, 100);
    setTimeout(buildPhotoCollage, 600);

    const cake = document.getElementById("cake-node");
    if (cake) {
        cake.style.transition = "opacity 1s ease, transform 1s ease";
        setTimeout(() => {
            cake.style.opacity = "1";
            cake.style.transform = "scale(1.35) translateY(0)";
        }, 300);
    }
}

function buildBackgroundGraphics() {
    const bg = document.getElementById("bg-graphics");
    if (!bg) return;

    const shapes = [
        { type: 'plush', top: '12%', right: '8%', scale: 1.4 },
        { type: 'white', top: '45%', right: '25%' },
        { type: 'flake', top: '20%', right: '40%', size: 12, op: 0.7 },
        { type: 'flake', top: '75%', right: '15%', size: 8, op: 0.9 }
    ];

    shapes.forEach(element => {
        const node = document.createElement("div");
        if (element.type === 'plush') {
            node.className = "design-plush-heart";
            node.style.width = "40px";
            node.style.height = "40px";
        } else if (element.type === 'white') {
            node.className = "design-white-heart";
            node.style.width = "25px";
            node.style.height = "25px";
        } else {
            node.className = "design-gold-flake";
            node.style.width = `${element.size}px`;
            node.style.height = `${element.size}px`;
        }
        node.style.top = element.top;
        node.style.right = element.right;
        bg.appendChild(node);
    });
}

function buildPhotoCollage() {
    const target = document.getElementById("collage-target");
    if (!target) return;

    // Updated with your new filenames: 1.jpg, 2.jpg, 4.jpg
    const collageFrames = [
        { top: '30%', left: '25%', img: '1.jpg' },
        { top: '30%', left: '75%', img: '2.jpg' },
        { top: '65%', left: '50%', img: '4.jpg' }
    ];

    collageFrames.forEach((config, idx) => {
        const frame = document.createElement("div");
        frame.className = "heart-photo-frame";
        frame.style.top = config.top;
        frame.style.left = config.left;

        // This will now load 1.jpg, 2.jpg, and 4.jpg
        frame.innerHTML = `<img src="${config.img}" alt="Memory">`;

        target.appendChild(frame);
    });
}

// ==========================================
// 6. INTERACTIVE CAKE STATE MACHINE
// ==========================================
let cakeState = "candle-lit";

function triggerCakeInteraction() {
    const flame = document.getElementById("flame-node");
    const quote = document.getElementById("quote-node");
    const cakeBody = document.getElementById("cake-body-node");

    if (cakeState === "candle-lit") {
        if (flame) flame.style.display = "none";
        if (quote) quote.innerText = "The candle is out! Now click to cut the cake! 🎂";
        cakeState = "candle-extinguished";
    }
    else if (cakeState === "candle-extinguished") {
        if (cakeBody) cakeBody.classList.add("cut");
        if (quote) quote.innerText = "Delicious! Click once more to eat a piece! 🥄";
        cakeState = "cake-cut";
    }
    else if (cakeState === "cake-cut") {
        const container = document.getElementById("cake-node");
        if (container) container.classList.add("eating-animation");
        if (quote) quote.innerText = "That was wonderful! Writing you a note...";

        setTimeout(triggerQuestionFlowModal, 1200);
        cakeState = "complete";
    }
}

// ==========================================
// 7. SECURITY QUESTION FLOW MODAL MECHANICS
// ==========================================
function triggerQuestionFlowModal() {
    const modal = document.createElement("div");
    modal.className = "popup-modal";
    modal.id = "secure-modal";
    modal.innerHTML = `
        <h2>Verification Check</h2>
        <p style="color: #9d5c63; margin-bottom: 10px;">To open your letter, what is your birth month?</p>
        <input type="text" id="security-input" placeholder="Type here...">
        <button onclick="verifySecretResponse()">Unlock Note 🔑</button>
    `;
    document.body.appendChild(modal);
}

function verifySecretResponse() {
    const val = document.getElementById("security-input").value.trim().toLowerCase();
    const modal = document.getElementById("secure-modal");

    if (val === "june" || val === "6") {
        if (modal) modal.classList.add("flip-page");
        setTimeout(() => {
            if (modal) modal.remove();
            transitionToLetterMode();
        }, 800);
    } else {
        alert("Incorrect response, please try again! Hint: Look closely at your calendar! 😉");
    }
}

// ==========================================
// 8. WRITING ENGINE SCROLL TEXT CONTROLLER
// ==========================================
function transitionToLetterMode() {
    document.body.className = "letter-mode";

    document.body.innerHTML = `
        <div class="letter-content-scroll" id="typewriter-output"></div>
        <div style="text-align: center; padding-bottom: 60px; position: relative; z-index: 101;">
            <button onclick="triggerHeartButtonsScreen()" style="background: #ffffff; color: #2e0211; box-shadow: 0 4px 15px rgba(0,0,0,0.4);">Next 🌟</button>
        </div>
    `;

    let index = 0;
    const outputTarget = document.getElementById("typewriter-output");

    function streamCharacters() {
        if (!outputTarget) return;
        if (index < preservedLetterText.length) {
            outputTarget.append(preservedLetterText.charAt(index));
            index++;
            setTimeout(streamCharacters, 40);
        }
    }
    streamCharacters();
}

// ==========================================
// 9. CORE HEART HUB SCREEN
// ==========================================
function triggerHeartButtonsScreen() {
    document.body.className = "final-page";

    document.body.innerHTML = `
        <div class="flip-card-3d" id="core-perspective-hub">
            <div style="text-align: center; display: flex; flex-direction: column; align-items: center; gap: 30px;">
                <div class="final-page-container">
                    
                    <div onclick="${askCompleted ? '' : "handleScreenTransition('ask')"}" class="${askCompleted ? 'disabled-heart-btn' : ''}">
                        <div class="heart-wrapper">
                            <img src="3.jpg" alt="Ask Frame">
                        </div>
                        <div class="heart-label" style="cursor: pointer; font-weight: bold; font-size: 3rem;">Ask ❓</div>
                    </div>
                    
                    <div onclick="${answerCompleted ? '' : "handleScreenTransition('answer')"}" class="${answerCompleted ? 'disabled-heart-btn' : ''}">
                        <div class="heart-wrapper">
                            <img src="5.png" alt="Answer Frame">
                        </div>
                        <div class="heart-label" style="cursor: pointer; font-weight: bold; font-size: 3rem;">Answer 💬</div>
                    </div>

                </div>
                <div id="heart-response-box" style="font-family: 'Dancing Script', cursive; font-size: 2.5rem; color: #ffe399; min-height: 60px; margin-top: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.6);">
                    ${(askCompleted && answerCompleted) ? '' : 'Select a heart to begin!'}
                </div>
            </div>
        </div>
    `;

    checkSurpriseMilestone();
}

// =========================================
// 10. ROTATION DIRECTION CONTROLLER (FLIPS)
// ==========================================
function handleScreenTransition(mode) {
    const hub = document.getElementById("core-perspective-hub");
    if (!hub) return;

    hub.classList.add("animate-front-flip");

    setTimeout(() => {
        if (mode === 'ask') {
            loadAskModeCanvas();
        } else if (mode === 'answer') {
            loadAnswerModeCanvas();
        }
    }, 400);
}

function handleBackFlipTransition() {
    const activeCanvas = document.querySelector(".action-box");
    if (activeCanvas) {
        activeCanvas.parentElement.classList.remove("animate-front-flip");
        activeCanvas.parentElement.classList.add("animate-back-flip");
    }

    setTimeout(() => {
        triggerHeartButtonsScreen();
    }, 400);
}

// ==========================================
// 11. SUB-CANVAS VIEWPORTS: ASK & ANSWER
// ==========================================
function loadAskModeCanvas() {
    document.body.className = "royal-blue-view";
    document.body.innerHTML = `
        <div class="flip-card-3d animate-front-flip">
            <div class="action-box">
                <h2>Ask me anything! (${askIndex}/5)</h2>
                <textarea id="ask-textarea-field" class="action-input" placeholder="Type your question here, Rahima..."></textarea>
                <div>
                    <button onclick="processNextAskStep()" style="background: #ffe399; color: #0a192f; font-size: 1.1rem; padding: 12px 35px;">Next ➔</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById("ask-textarea-field").focus();
}

function processNextAskStep() {
    const txtField = document.getElementById("ask-textarea-field");
    if (txtField && txtField.value.trim() === "") {
        alert("Please write something before clicking next! 💕");
        return;
    }

    savedUserQuestions.push(`Question ${askIndex}: ${txtField.value.trim()}`);

    if (askIndex < 5) {
        askIndex++;
        loadAskModeCanvas();
    } else {
        askCompleted = true;
        sendDataToFormspree("Rahima's Questions", savedUserQuestions);
        handleBackFlipTransition();
    }
}

function loadAnswerModeCanvas() {
    document.body.className = "rose-view";
    document.body.innerHTML = `
        <div class="flip-card-3d animate-front-flip">
            <div class="action-box">
                <h2>My Question (${answerIndex}/5)</h2>
                <p style="font-size: 1.3rem; margin-bottom: 20px; font-weight: 600; color: #fffdf9;">
                    ${myQuestionsArray[answerIndex - 1]}
                </p>
                <textarea id="answer-textarea-field" class="action-input" placeholder="Type your answer here..."></textarea>
                <div>
                    <button onclick="processNextAnswerStep()" style="background: #ffffff; color: #b5179e; font-size: 1.1rem; padding: 12px 35px;">Next ➔</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById("answer-textarea-field").focus();
}

function processNextAnswerStep() {
    const txtField = document.getElementById("answer-textarea-field");
    if (txtField && txtField.value.trim() === "") {
        alert("Please answer the question before clicking next! ✨");
        return;
    }

    savedUserAnswers.push(`Q: ${myQuestionsArray[answerIndex - 1]} -> A: ${txtField.value.trim()}`);

    if (answerIndex < 5) {
        answerIndex++;
        loadAnswerModeCanvas();
    } else {
        answerCompleted = true;
        sendDataToFormspree("Rahima's Answers", savedUserAnswers);
        handleBackFlipTransition();
    }
}

// ==========================================
// 12. FORMSPREE BACKEND SUBMISSION CHANNEL
// ==========================================
function sendDataToFormspree(categoryLabel, dataLogArray) {
    const endpoint = "https://formspree.io/f/xdavqazr";
    const compiledContent = dataLogArray.join("\n\n");

    fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            Section: categoryLabel,
            Submission: compiledContent
        })
    })
        .catch(error => console.error("Transmission Error:", error));
}

// ==========================================
// 13. FINAL CELEBRIO SURPRISE LOCKDOWN ENGINE
// ==========================================
function checkSurpriseMilestone() {
    if (askCompleted && answerCompleted) {
        setTimeout(() => {
            const modal = document.createElement("div");
            modal.className = "popup-modal";
            modal.id = "final-surprise-modal";
            modal.style.zIndex = "999999";
            modal.innerHTML = `
                <h2>Ready for your final surprise?</h2>
                <div style="margin-top: 25px; position: relative; min-height: 80px;">
                    <button onclick="revealUltimateSurprise()" style="background: #c9183b; color: white; padding: 12px 30px;">OK</button>
                    <button id="final-no-btn" onmouseover="evadeFinalNo()" onclick="evadeFinalNo()" style="position: absolute; background: #666; color: white; padding: 12px 30px; transition: all 0.15s ease;">No</button>
                </div>
            `;
            document.body.appendChild(modal);
        }, 800);
    }
}

function evadeFinalNo() {
    const noBtn = document.getElementById("final-no-btn");
    if (!noBtn) return;

    const maxX = 180;
    const minX = -180;
    const maxY = 120;
    const minY = -40;

    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function revealUltimateSurprise() {
    const modal = document.getElementById("final-surprise-modal");
    if (modal) modal.remove();

    // Generate Instant Burst Explosion
    const heartEmojis = ["❤️", "💖", "💝", "💘", "💕"];
    const explosionCount = 130;
    const originX = window.innerWidth / 2;
    const originY = window.innerHeight / 2;

    for (let i = 0; i < explosionCount; i++) {
        const heart = document.createElement("div");
        heart.className = "exploding-heart";
        heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = `${originX}px`;
        heart.style.top = `${originY}px`;

        const targetX = (Math.random() - 0.5) * window.innerWidth * 1.6;
        const targetY = (Math.random() - 0.5) * window.innerHeight * 1.6;
        const randomRotation = Math.floor(Math.random() * 360) + "deg";
        const randomScale = (Math.random() * 1.5 + 0.5);

        heart.style.setProperty("--tx", `${targetX}px`);
        heart.style.setProperty("--ty", `${targetY}px`);
        heart.style.setProperty("--rot", randomRotation);
        heart.style.setProperty("--scale", randomScale);

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }

    // Clear layout and build the black video loop frame matrix elements
    setTimeout(() => {
        document.body.className = "dark-void-state";
        document.body.innerHTML = `
            <div class="ultimate-black-screen">
                <canvas></canvas>
                <div id="void-text" class="void-text-overlay">Happy Birthday Rahima!</div>
                <div id="void-brand" class="void-watermark">live happy i will always be there for you</div>
            </div>
        `;
        bootVoidMatrixEngine();
    }, 600);
}

// =======================================================================
// 14. KINETIC SWIRLING & COLLAPSING HEART VOID ENGINE (QUOTE CENTERED)
// =======================================================================
function bootVoidMatrixEngine() {
    const canvasEl = document.querySelector(".ultimate-black-screen canvas");
    if (!canvasEl) return;
    const ctx = canvasEl.getContext("2d");

    const textOverlay = document.getElementById("void-text");
    const centerQuoteOverlay = document.getElementById("void-brand");

    function resizeViewport() {
        canvasEl.width = window.innerWidth;
        canvasEl.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeViewport);
    resizeViewport();

    // Vertices generation
    const vertices = [];
    const totalParticles = 2500;

    let currentPhase = "APPEAR";
    let phaseTimer = 0;
    let rotationY = 0;

    // Show initial center birthday greeting right away
    if (textOverlay) textOverlay.classList.add("visible");

    function getHeartParametricPoint(t) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        return { x: x * 11, y: -y * 11 };
    }

    // Initialize layout positions
    for (let i = 0; i < totalParticles; i++) {
        const t = Math.random() * Math.PI * 2;
        const targetCoord = getHeartParametricPoint(t);
        const dispersion = Math.random() * 12 + 1;
        const dispAngle = Math.random() * Math.PI * 2;

        vertices.push({
            curX: 0, curY: 0, curZ: 0,
            targetX: targetCoord.x + Math.cos(dispAngle) * dispersion,
            targetY: targetCoord.y + Math.sin(dispAngle) * dispersion,
            targetZ: (Math.random() - 0.5) * 40,
            size: Math.random() * 1.6 + 0.6,
            speedFactor: Math.random() * 0.02 + 0.015,
            progress: 0,
            angleTheta: t,
            shimmerPhase: Math.random() * Math.PI * 2,
            color: ['#ff2a6d', '#ff5c8a', '#ff85a2', '#b5179e', '#f72585'][Math.floor(Math.random() * 5)]
        });
    }

    // Main structural animation loop running at 60 FPS
    function render() {
        requestAnimationFrame(render);

        // Motion trailing clear loop
        ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
        ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

        const centerX = canvasEl.width / 2;
        const centerY = canvasEl.height / 2;

        phaseTimer++;

        // ==================================================
        // TIMELINE CONTROLLER STATE MACHINE (5-SECOND INTERVALS)
        // ==================================================

        // At 5 Seconds (300 frames): Fade out "Happy Birthday" text, bring in "I love you"
        if (phaseTimer === 300) {
            if (textOverlay) {
                textOverlay.classList.remove("visible");
                setTimeout(() => {
                    textOverlay.innerText = "I love you";
                    textOverlay.classList.add("visible");
                }, 1200);
            }
        }

        // At 10 Seconds (600 frames): Toggles particle disintegration & displays large center quote
        if (phaseTimer === 600) {
            currentPhase = "DISAPPEAR";
            if (textOverlay) textOverlay.classList.remove("visible");
            if (centerQuoteOverlay) centerQuoteOverlay.classList.add("visible");
            phaseTimer = 0; // Reset layout timer tracking for vortex math offset
        }

        rotationY += 0.008;
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);

        // Run projection updates over the active vertices
        vertices.forEach(p => {
            p.shimmerPhase += 0.04;

            if (currentPhase === "APPEAR" || currentPhase === "HEART_HOLD") {
                if (p.progress < 1) {
                    p.progress = Math.min(1, p.progress + p.speedFactor);
                }
                const pulse = 1 + Math.sin(p.shimmerPhase) * 0.02;
                p.curX = p.targetX * p.progress * pulse;
                p.curY = p.targetY * p.progress * pulse;
                p.curZ = p.targetZ * p.progress;
            }
            else if (currentPhase === "DISAPPEAR") {
                // Sequential vortex sweep tearing away based on coordinate angles matching the video file
                const delayThreshold = (p.angleTheta / (Math.PI * 2)) * 80;
                if (phaseTimer > delayThreshold) {
                    p.progress = Math.max(0, p.progress - p.speedFactor * 1.2);

                    // Rotational collapsing matrix trail calculations
                    const vortexAngle = (phaseTimer - delayThreshold) * 0.06;
                    p.curX = (p.targetX * p.progress) * Math.cos(vortexAngle) - (p.targetY * p.progress) * Math.sin(vortexAngle);
                    p.curY = (p.targetX * p.progress) * Math.sin(vortexAngle) + (p.targetY * p.progress) * Math.cos(vortexAngle);
                    p.curZ = p.targetZ * p.progress;
                } else {
                    const pulse = 1 + Math.sin(p.shimmerPhase) * 0.02;
                    p.curX = p.targetX * pulse;
                    p.curY = p.targetY * pulse;
                    p.curZ = p.targetZ;
                }
            }

            // Calculate 3D to 2D projection matrix coordinates
            const rotX = p.curX * cosY - p.curZ * sinY;
            const rotZ = p.curX * sinY + p.curZ * cosY;

            const perspective = 400 / (400 + rotZ);
            const projX = centerX + rotX * perspective;
            const projY = centerY + p.curY * perspective;

            // Render single visible coordinate point
            if (p.progress > 0 && projX >= 0 && projX <= canvasEl.width && projY >= 0 && projY <= canvasEl.height) {
                ctx.beginPath();
                ctx.arc(projX, projY, p.size * perspective, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = Math.max(0.1, (1 + Math.sin(p.shimmerPhase * 2)) / 2) * p.progress;
                ctx.fill();
            }
        });

        ctx.globalAlpha = 1.0;
    }

    render();
}
// ==========================================
// 15. GLOBAL FLYING HEARTS ENGINE (CENTER VANISH)
// ==========================================
// ==========================================
// 16. GLOBAL DECORATION ENGINE (Persistent)
// ==========================================
