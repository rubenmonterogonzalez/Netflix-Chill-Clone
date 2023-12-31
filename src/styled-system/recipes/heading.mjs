import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const headingFn = /* @__PURE__ */ createRecipe('heading', {}, [])

const headingVariantMap = {}

const headingVariantKeys = Object.keys(headingVariantMap)

export const heading = /* @__PURE__ */ Object.assign(headingFn, {
  __recipe__: true,
  __name__: 'heading',
  raw: (props) => props,
  variantKeys: headingVariantKeys,
  variantMap: headingVariantMap,
  splitVariantProps(props) {
    return splitProps(props, headingVariantKeys)
  },
})