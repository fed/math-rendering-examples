// Sum[Sin[x^m + y^n], {m, 1, 3}, {n, 1, m}]
export default `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
            <munderover>
                <mo>&#8721;</mo>
                <mrow>
                    <mi>m</mi>
                    <mo>=</mo>
                    <mn>1</mn>
                </mrow>
                <mn>3</mn>
            </munderover>
            <mrow>
                <munderover>
                    <mo>&#8721;</mo>
                    <mrow>
                        <mi>n</mi>
                        <mo>=</mo>
                        <mn>1</mn>
                    </mrow>
                    <mi>m</mi>
                </munderover>
                <mrow>
                    <mi>sin</mi>
                    <mo>&#8289;</mo>
                    <mo>(</mo>
                    <mrow>
                        <msup>
                            <mi>x</mi>
                            <mi>m</mi>
                        </msup>
                        <mo>+</mo>
                        <msup>
                            <mi>y</mi>
                            <mi>n</mi>
                        </msup>
                    </mrow>
                    <mo>)</mo>
                </mrow>
            </mrow>
        </mrow>
    </math>
`;
