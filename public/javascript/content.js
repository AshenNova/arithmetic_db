export const displayContent = (level) => {
  //   let html = undefined;

  if (level == "heuThree") {
    return `
    </p>
    1. Sum and Difference</br>
    2. Supposition</br>
    3. Under the same unit ( Unit )</br>
    4. Under the same unit ( Difference )</br>
    5. Equal Grouping</br>
    6. Round up/down</br>
    7. Double Effect</br>
    8. Grouping ( Bonus )</br>
    <hr>
    9. All`;
  }

  if (level == "heuThreeb") {
    return `
    </p>
    1. Repeated Identity</br>
    2. Equal Beginning</br>
    3. Equal End</br>
    4. Unchanged Object</br>
    5. Working Backwards Straightline</br>
    <hr>
    9. All`;
  }

  if (level == "heuFour") {
    return `
    </p>
    1. Excess and Shortage ( Type 1 )</br>
    2. Excess and Shortage ( Type 2 )</br>
    3. Origin</br>
    4.Repeated Identity ( Type 2 )</br>
    5. Uneven Grouping</br>
    6. Grouping Rows</br>
    7. Systematic Listing</br>
    <hr>
    9. All
    `;
  }

  if (level == "heuFourb") {
    return `
    </p>
    1. Lowest Common Multiples ( Indirect )</br>
    2. Highest Common Factor ( Indirect )</br>
    3. Unchanged Difference</br>
    4. Unchanged Total</br>
    5. Simultaneous Equation</br>
    6. Internal Transfer: Double Effect</br>
    <hr>
    9. All`;
  }
  if (level == "heuFive") {
    return `
    </p>
    1. Grouping with Difference</br>
    2. Supposition (Negative)</br>
    3. Supposition negative ( Difference)</br>
    4. Identical Quantity with Difference</br>
    5. Substitution</br>
    6. Shaking Hands</br>
    7. Bonus</br>
    8. Different Quantity with Difference</br>
    <hr>
    9. All
    `;
  }

  if (level == "heuFiveb") {
    return `
    </p>
    1. Working Backwards (Type 1)</br>
    2. Working Backwards (Type 2)</br>
    3. Working Backwards (Type 3) Independent</br>
    4. Either or</br>
    5. Unchanged Total (if)</br>
    6. Supposition (Units)</br>
    <hr>9. All
    `;
  }
  if (level == "heuSix") {
    return `
    </p>
    1. Lowest Common Time</br>
    2. Cycle</br>
    3. Repeated Identity Type 3</br>
    4. Snake and Ladder</br>
    5. Cause and Effect</br>
    6. Identical Effect: Discount</br>
    <hr>
    9. All
    `;
  }

  if (level == "heuSixb") {
    return `
    </p>
    1. Simultaneous Equation ( Parts and Units ) Type 1</br>
    2. Identical Quantity with difference (Type 3)</br>
    3. More Than / Less Than</br>
    4. Using it all</br>
    5. Identical Quantity with difference (Level 2) Type 1 Multiples</br>
    6. Identical Quantity with difference (Level 2) Type 1 Difference</br>
    7. Identical Quantity with difference (Level 2) Type 2</br>
    <hr>
    9. All
    `;
  }

  if (level == "calThree") {
    return `
    </p>
    1. Addition (to - 10 000) No carry</br>
    2. Subtraction (to - 10 000) No borrowing</br>
    3. Addition (to - 10 000) (Carrying)</br>
    4. Subtraction (to - 10 000) (Borrowing)</br>
    5. Single blank</br>
    6. Working (Other sequence)</br>
    7. Arithmetic Constant</br>
    8. Arithmetic Stagger</br>
    9. Working: Multiplication</br>
    10. Overlapping Place Value</br>
    11. Working: Long Division ( No remainder )</br>
    12. Working: Long Division ( Remainder )</br>
    13. Working: Multiplication ( Single Blank )</br>
    14. Multiplication in sets</br>
    15. Long Division: Simple Statement</br>
    16. Left Side Right Side + - x ÷</br>
    17. Multiplication and Division of Convenient Numbers</br>
    18. Parts and Intervals</br>
    <hr>
    19. Time: Timeline ( hours and mins )</br>
    <hr>
    20. Parts and Intervals ( Conversion)<br>
    <hr>
    21. Money: Addition Subtraction and Multiplication</br>
    <hr>
    22. Fractions: Shapes</br>
    23. Fractions: Addition and Subtraction</br>
    24. Fractions: Expansion and simplification</br>
    25. Fractions: Mid-point</br>
    <hr></hr>
    26. Geometry: Area and Perimeter</br>
    99. All`;
  }
  if (level == "calFour") {
    return `
      </p>
      1. Common Multiples</br>
      2. Listing Factors</br>
      3. Common Factors</br>
      4. Double Digit Multiplication</br>
      5. Left Side Right Side + - x /</br>
      6. Multiplication in Sets</br>
      7. Multiplication in Sets (Further Breaking)</br>
      <hr>
      8. Fractions: Addition: Mixed Fractions</br>
      9. Fractions: Subtraction: Mixed Fractions</br>
      10. Fractions: Numberline</br>
      11. Fractions: Unit with a Value</br>
      12. Fractions: Parts of a fraction</br>
      13. Fractions: Form</br>
      14. Fractions: Conversion</br>
      <hr>
      15. Decimals: Addition</br>
      16. Decimals: Subtraction</br>
      17. Decimals: Overlapping Place Value</br>
      18. Decimals: Multiplication (Single)</br>
      19. Decimals: Multiplication (Double)</br>
      20. Decimals: Division </br>
      21. Fractions to Decimal (Limit)</br>
      22. Decimals: Division and Multiplication with splitting</br>
      23. Decimals: Parts and Intervals</br>
      <hr>
      99. All
      `;
  }
  if (level == "calFive")
    return `
      </p>
      0. Order of Operation</br>
      <hr></hr>
      1. Fractions: Multiplication of Fractions</br>
      2. Fractions: Mixed Fraction Multiplication</br>
      3. Fractions: Conversion</br>
      4. Fractions: Remainder Concept</br>
      5. Fractions: Identical Numerator</br>
      6. Fractions: Unlike Fraction with Permission</br>
      7. Fractions: Before and after like fractions</br>
      <hr></hr>
      8. Geometry: Right angled Triangle</br>
      9. Geometry: Area of Triangle</br>
      10. Geometry: Big - Small</br>
      
      <hr></hr>
      11. Volume: Dimensions and Surface Area</br>
      12. Volume: Numerator with a Value</br>
      <hr></hr>
      13. Ratio: Simplification and Expansion</br>
      14. Ratio: Shapes</br>
      15. Ratio: Repeated Identity</br>
      16. Ratio: Identical Total</br>
      17. Ratio: Wipe on wipe off</br>
      <hr></hr>
      18. Rates: Part thereof part thereafter</br>
      19. Rates: Taps</br>
      <hr></hr>
      20. Percentage: Percentage of</br>
      21. Percentage: Percentage change</br>
      22. Percentage: Repeated Identity</br>
      
      23. Percentage: Remainder Concept</br>
      24. Percentage: Simple and Further discount</br>

      <hr></hr>
      25. Average: Internal change</br>
      26. Average: Triangle Numbers</br>
      <hr></hr>
      </p>99. All
      
      `;
  if (level == "calFiveb") {
    return `
    </p>
    1. Fractions: Before and After</br>
    2. Fractions: Under the same unit (Level 2)</br>
    3. Fractions: Overlapping Model</br>
    4. Fractions: Identical Numerator (Type 2)</br>
    <hr>
    5. Geometry: Obtuse Triangle</br>
    6. Geometry: Area of Figure:  Cutting</br>
    7. Geometry: Manipulation of Dimension</br>
    8. Geometry: Manipulation of Dimension: level 2</br>
    9. Geometry: Area of Figure: Using 2 different Units</br>
    <hr>
    10. Ratio: Repeated Group</br>
    11. Ratio: Unchanged Object</br>
    12. Ratio: Unchanged Total</br>
    13. Ratio: Unchanged Difference</br>
    14. Ratio: Manipulation in units</br>
    15. Ratio: Repeated Identity (Geometry)</br>
    <hr>
    16. Percentage: Repeated Group</br>
    17. Percentage: Overlapping Model</br>
    18. Percentage: GST, discount and Service Charge</br>
    19. Percentage: Identical Effect</br>
    <hr>
    20. Average: External Change</br>
    21. Average: Odd consecutive days</br>
    <hr>
    22. Ratio: Manipulation of units with value</br>
    23. Pattern: Continuous Pattern (Sets) </br>
    <hr>
    99. All
    `;
  }
  if (level == "calSix") {
    return `
    </p>
    1. Fractions: Finding remainder</br>
    2. Fractions: Numerator with a Value</br>
    <hr>
    3. Circles: Area and Perimeter</br>
    4. Circles: Inner Square</br>
    5. Circles: Others</br>
    <hr>
    6. Speed: Average Speed</br>
    7. Speed: Moving Apart</br>
    8. Speed: Difference in speed (Mid)</br>
    9. Speed: Surrogate</br>
    <hr>
    10. Pie Chart</br>
    <hr>
    99. All
    `;
  }
  if (level == "calSixb") {
    return `
    </p>
    1. Speed: Meet up</br>
    2. Speed: Catch up</br>
    3. Speed: Double Triangle</br>
    <hr>
    4. Volume: Grouping</br>
    5. Volume: Meet Up</br>
    <hr>
    6. Geometry: Repeated Identity Area</br>
    7. Geometry: Manipulation of Dimension: Overlapping Figure</br>
    <hr>
    99. All`;
  }
};
