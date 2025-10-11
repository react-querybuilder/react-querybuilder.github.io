# ShiftActions

Renders a `<div>` containing two `<button>` elements that are stacked vertically with [default styles](/docs/styling/overview.md). When [`showShiftActions`](/docs/components/querybuilder.md#showshiftactions) is `true`, these buttons appear at the front of each rule and subgroup:

* **Up button**: Shifts the rule/group above the preceding rule or into the preceding group as the last member
* **Down button**: Shifts the rule/group below the next rule or into the next group as the first member

For example, if a subgroup immediately follows a rule, shifting the rule down will move it into that subgroup as the first element, rather than positioning it below the subgroup.
