// Sum[x^k/k!, {k, 1, 7}]
export default `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
            <munderover>
                <mo>&#8721;</mo>
                <mrow>
                    <mi>k</mi>
                    <mo>=</mo>
                    <mn>1</mn>
                </mrow>
                <mn>7</mn>
            </munderover>
            <mfrac>
                <msup>
                    <mi>x</mi>
                    <mi>k</mi>
                </msup>
                <mrow>
                    <mi>k</mi>
                    <mo>!</mo>
                </mrow>
            </mfrac>
        </mrow>
    </math>
`;
