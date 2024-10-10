// Get the canvas and context
const canvas = document.getElementById('limitCanvas');
const ctx = canvas.getContext('2d');

// Variables to control animation
let fxInput, aInput, epsilonInput;
let delta = 1;
let shrinking = true;
let animationFrame;

// Get function f(x), point 'a', and epsilon
function getInputs() {
    fxInput = document.getElementById('fx').value;
    aInput = parseFloat(document.getElementById('a').value);
    epsilonInput = parseFloat(document.getElementById('epsilon').value);
}

// Parse the function string and safely evaluate it
function evaluateFx(x) {
    try {
        return eval(fxInput);
    } catch (e) {
        return 0; // Default if the input function is invalid
    }
}

// Draw grid lines for better visualization
function drawGrid(xMin, xMax, yMin, yMax, stepX, stepY) {
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 0.5;

    // Draw vertical grid lines with numbers
    for (let x = xMin; x <= xMax; x += stepX) {
        const canvasX = toCanvasX(x);
        ctx.beginPath();
        ctx.moveTo(canvasX, toCanvasY(yMin));
        ctx.lineTo(canvasX, toCanvasY(yMax));
        ctx.stroke();

        // Add x-axis labels
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.fillText(x.toFixed(2), canvasX - 15, toCanvasY(0) + 15);
    }

    // Draw horizontal grid lines with numbers
    for (let y = yMin; y <= yMax; y += stepY) {
        const canvasY = toCanvasY(y);
        ctx.beginPath();
        ctx.moveTo(toCanvasX(xMin), canvasY);
        ctx.lineTo(toCanvasX(xMax), canvasY);
        ctx.stroke();

        // Add y-axis labels
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.fillText(y.toFixed(2), toCanvasX(0) - 30, canvasY + 5);
    }
}

// Convert graph points to canvas coordinates
function toCanvasX(x) {
    const xMin = -2 * Math.PI, xMax = 2 * Math.PI;
    const width = canvas.width;
    return ((x - xMin) / (xMax - xMin)) * width;
}

function toCanvasY(y) {
    const yMin = -2, yMax = 2;
    const height = canvas.height;
    return height - ((y - yMin) / (yMax - yMin)) * height;
}

// Draw the epsilon-delta visualization
function drawEpsilonDelta() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Canvas dimensions and scale
    const xMin = -2 * Math.PI, xMax = 2 * Math.PI;
    const yMin = -2, yMax = 2;
    const stepX = Math.PI / 2;  // Step for vertical grid lines
    const stepY = 0.5;          // Step for horizontal grid lines

    // Draw grid
    drawGrid(xMin, xMax, yMin, yMax, stepX, stepY);

    // Draw function graph
    ctx.beginPath();
    for (let x = xMin; x <= xMax; x += 0.01) {
        const fx = evaluateFx(x);
        const canvasX = toCanvasX(x);
        const canvasY = toCanvasY(fx);
        if (x === xMin) ctx.moveTo(canvasX, canvasY);
        else ctx.lineTo(canvasX, canvasY);
    }
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Values of the function at 'a'
    const f_a = evaluateFx(aInput);

    // Draw epsilon region (horizontal lines at L ± epsilon)
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]); // Dotted line for epsilon bounds
    ctx.beginPath();
    ctx.moveTo(toCanvasX(aInput - delta), toCanvasY(f_a + epsilonInput));
    ctx.lineTo(toCanvasX(aInput + delta), toCanvasY(f_a + epsilonInput));
    ctx.moveTo(toCanvasX(aInput - delta), toCanvasY(f_a - epsilonInput));
    ctx.lineTo(toCanvasX(aInput + delta), toCanvasY(f_a - epsilonInput));
    ctx.stroke();
    ctx.setLineDash([]); // Reset dashed lines

    // Draw delta region (vertical lines at a ± delta)
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(toCanvasX(aInput - delta), toCanvasY(yMin));
    ctx.lineTo(toCanvasX(aInput - delta), toCanvasY(yMax));
    ctx.moveTo(toCanvasX(aInput + delta), toCanvasY(yMin));
    ctx.lineTo(toCanvasX(aInput + delta), toCanvasY(yMax));
    ctx.stroke();

    // Connect the red horizontal bars to the y-values at the function
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(toCanvasX(aInput), toCanvasY(f_a + epsilonInput));
    ctx.lineTo(toCanvasX(aInput), toCanvasY(f_a - epsilonInput));
    ctx.stroke();

    // Show the y-values where the vertical delta bars intersect the graph
    const f_a_minus_delta = evaluateFx(aInput - delta);
    const f_a_plus_delta = evaluateFx(aInput + delta);

    ctx.fillStyle = 'blue';
    ctx.font = '16px Arial';
    ctx.fillText(`f(a-δ) = ${f_a_minus_delta.toFixed(2)}`, toCanvasX(aInput - delta) + 10, toCanvasY(f_a_minus_delta));
    ctx.fillText(`f(a+δ) = ${f_a_plus_delta.toFixed(2)}`, toCanvasX(aInput + delta) + 10, toCanvasY(f_a_plus_delta));

    // Draw the point (a, f(a)) with a circle
    ctx.beginPath();
    ctx.arc(toCanvasX(aInput), toCanvasY(f_a), 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.strokeStyle = 'green';
    ctx.stroke();

    // Update delta in animation (shrink towards zero)
    if (shrinking) {
        delta -= 0.01;
        if (delta <= 0.01) {
            shrinking = false; // Once delta is small enough, stop shrinking
        }
    } else {
        delta += 0.01;
        if (delta >= 1) {
            shrinking = true; // Reset to initial delta for loop effect
        }
    }
}

// Start the animation
function startAnimation() {
    getInputs();
    delta = 1;
    shrinking = true;
    cancelAnimationFrame(animationFrame);
    function animate() {
        drawEpsilonDelta();
        animationFrame = requestAnimationFrame(animate);
    }
    animate();
}
