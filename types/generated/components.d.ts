import type { Schema, Attribute } from '@strapi/strapi';

export interface CalculatorParameterChecked extends Schema.Component {
  collectionName: 'components_calculator_parameter_checkeds';
  info: {
    displayName: 'Parameter Checked';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    name: Attribute.String;
    value: Attribute.String;
    price: Attribute.Decimal;
  };
}

export interface CalculatorParameter extends Schema.Component {
  collectionName: 'components_calculator_parameters';
  info: {
    displayName: 'Parameter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    name: Attribute.String;
    inputs: Attribute.Component<'form.input', true>;
    dependsOn: Attribute.String;
  };
}

export interface FormInput extends Schema.Component {
  collectionName: 'components_calculator_inputs';
  info: {
    displayName: 'Input';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    name: Attribute.String;
    placeholder: Attribute.Text;
    type: Attribute.Enumeration<['radio', 'text', 'select']> &
      Attribute.DefaultTo<'radio'>;
    price: Attribute.Decimal;
    chainRelationships: Attribute.Relation<
      'form.input',
      'oneToMany',
      'api::chain-relationship.chain-relationship'
    >;
  };
}

export interface NavigationItemMenu extends Schema.Component {
  collectionName: 'components_navigation_item_menus';
  info: {
    displayName: 'Item Menu';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    custom_url: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface NavigationListItems extends Schema.Component {
  collectionName: 'components_navigation_list_items';
  info: {
    displayName: 'List Items';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    custom_url: Attribute.String;
    icon: Attribute.Media;
    items: Attribute.Component<'navigation.item-menu', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'calculator.parameter-checked': CalculatorParameterChecked;
      'calculator.parameter': CalculatorParameter;
      'form.input': FormInput;
      'navigation.item-menu': NavigationItemMenu;
      'navigation.list-items': NavigationListItems;
    }
  }
}
