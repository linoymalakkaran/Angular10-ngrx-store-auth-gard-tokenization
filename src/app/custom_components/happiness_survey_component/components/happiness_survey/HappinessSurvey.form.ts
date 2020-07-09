import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import HppinessSurveyEditDisplay from './editForm/HappinessSurvey.edit.display';
export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: HppinessSurveyEditDisplay
    }
  ], ...extend);
}
