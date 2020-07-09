/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './StarRating.form';

/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
export default class StarRating extends (FieldComponent as any) {
  public checks: Array<Array<any>>;
  constructor(component, options, data) {
    super(component, options, data);
    this.checks = [];
  }

  static schema() {
    return FieldComponent.schema({
      type: 'starrating',
      numRows: 1,
      numCols: 5
    });
  }

  public static editForm = editForm;

  static builderInfo = {
    title: 'Star Rating',
    group: 'basic',
    icon: 'fa fa-table',
    weight: 70,
    documentation: 'http://help.form.io/userguide/#table',
    schema: StarRating.schema()
  }

  get tableClass() {
    let tableClass = 'rating-wrapper ';
    ['striped', 'bordered', 'hover', 'condensed'].forEach((prop) => {
      if (this.component[prop]) {
        tableClass += `table-${prop} `;
      }
    });
    return tableClass;
  }

  renderCell(row, col) {
    return this.renderTemplate('input', {
      input: {
        type: 'input',
        ref: `${this.component.key}-${row+1}`,
        attr: {
          id: `rating-input-${row+1}-${col}`,
          class: 'rating-input',
          name: 'rating-input-1',
          type: 'radio',
        }
      }
    });
  }

  renderCellLabel(row, col) {
    return this.renderTemplate('input', {
      input: {
        type: 'input',
        ref: `${this.component.key}-${row}`,
        attr: {
          id: `${this.component.key}-${row}-${col}`,
          class: 'rating-input',
          name: 'customradiobutton',
          type: 'radio',
        }
      }
    });
  }

  public render(children) {
    return super.render(this.renderTemplate('starrating', {
      tableClass: this.tableClass,
      renderCell: this.renderCell.bind(this)
    }));
  }

  /**
   * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
   * elements to attach functionality to.
   *
   * @param element
   * @returns {Promise}
   */
  attach(element) {
    const refs = {};

    for (let i = 0; i < this.component.numRows; i++) {
      refs[`${this.component.key}-${i}`] = 'multiple';
    }

    this.loadRefs(element, refs);

    this.checks = [];
    for (let i = 0; i < this.component.numRows; i++) {
      this.checks[i] = Array.prototype.slice.call(this.refs[`${this.component.key}-${i}`], 0);

      // Attach click events to each input in the row
      this.checks[i].forEach(input => {
        this.addEventListener(input, 'click', () => this.updateValue())
      });
    }

    // Allow basic component functionality to attach like field logic and tooltips.
    return super.attach(element);
  }

  /**
   * Get the value of the component from the dom elements.
   *
   * @returns {Array}
   */
  getValue() {
    var value = [];
    for (var rowIndex in this.checks) {
      var row = this.checks[rowIndex];
      value[rowIndex] = [];
      for (var colIndex in row) {
        var col = row[colIndex];
        value[rowIndex][colIndex] = !!col.checked;
      }
    }
    return value;
  }

  /**
   * Set the value of the component into the dom elements.
   *
   * @param value
   * @returns {boolean}
   */
  setValue(value) {
    if (!value) {
      return;
    }
    for (var rowIndex in this.checks) {
      var row = this.checks[rowIndex];
      if (!value[rowIndex]) {
        break;
      }
      for (var colIndex in row) {
        var col = row[colIndex];
        if (!value[rowIndex][colIndex]) {
          return false;
        }
        let checked = value[rowIndex][colIndex] ? 1 : 0;
        col.value = checked;
        col.checked = checked;
      }
    }
  }
}
