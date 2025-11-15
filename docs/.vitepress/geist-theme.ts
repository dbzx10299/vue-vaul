export const geistTheme = {
  name: 'geist-theme',
  settings: [
    {
      scope: [
        'punctuation.definition.parameters.begin.js',
        'punctuation.definition.parameters.end.js',
        'punctuation.definition.parameters.begin.ts',
        'punctuation.definition.parameters.end.ts',
        'meta.brace.square.ts',
        'meta.brace.round.js',
        'meta.brace.round.ts',
        // for v:bind :
        'punctuation.separator.key-value.html',
      ],
      settings: {
        foreground: '#fff'
      }
    },
    {
      scope: [
        'entity.name.tag.html',
        'entity.name.tag.script.html.vue',
        'variable.other.object.js',
        'variable.other.object.ts',
        'variable.other.property.js',
        'variable.other.property.ts',
        'storage.type.function.js',
        'storage.type.function.ts',
        'storage.modifier.async.js',
        'storage.modifier.async.ts',
        'variable.other.constant.js',
        'variable.other.constant.ts',
        'variable.other.readwrite.alias.ts',
        'meta.array.literal.js',
        'meta.template-tag.end',
        'variable.other.readwrite.js',
        'variable.other.readwrite.ts',
        'constant.language.boolean.true.js',
        'constant.language.boolean.false.js',
        'constant.numeric.decimal.js',
        'entity.name.tag.js.jsx',
        'entity.name.tag.js',
        'meta.tag.attributes.js',
        'variable.other.constant.object.js',
        'punctuation.definition.binding-pattern.object.js',
        'meta.brace.round.graphql',
        'constant.object.key.graphql',
        'punctuation.definition.parameters.begin.js',
        'variable.parameter.ts',
        'variable.parameter.js',
        'punctuation.definition.typeparameters.begin.ts',
        'punctuation.definition.typeparameters.end.ts',
        'meta.jsx.children.js.jsx',
        'punctuation.separator.parameter.js',
        'keyword.other.debugger.js',
        'variable.other.object.property.js',
        'variable.object.property.ts'
      ],
      settings: {
        foreground: '#e3e7e6'
      }
    },
    {
      scope: [
        'meta.property-list.css',
        'support.type.property-name.array.toml',
        'punctuation.definition.block.sequence.item.yaml',
        'variable.other.readwrite.alias.js',
        'meta.object-literal.key.js',
        'variable.other.readwrite.alias.ts',
        'support.type.property-name.json'
      ],
      settings: {
        foreground: 'hsl(0 0% 90%)'
      }
    },
    {
      scope: [
        'string.unquoted.plain.out.yaml'
      ],
      settings: {
        foreground: 'hsl(0 0% 80%)'
      }
    },
    {
      scope: [
        
      ],
      settings: {
        foreground: 'hsl(0 0% 70%)'
      }
    },
    {
      scope: [
        'punctuation.eq.toml',
        'string.quoted.single.basic.line.toml',
        'punctuation.definition.table.toml',
        'punctuation.definition.array.table.toml',
        'string.quoted.double.json'
      ],
      settings: {
        foreground: 'hsl(0 0% 60%)'
      }
    },
    {
      scope: [
        'entity.other.attribute-name.html',
        'comment.block.css'
      ],
      settings: {
        foreground: 'hsl(0 0% 50%)'
      }
    },
    {
      scope: [
        'comment.line.double-slash.js',
        'comment.line.double-slash.ts',
        'comment.block.documentation.js',
        'comment.block.documentation.ts',
        'comment.block.js',
        'comment.block.ts',
        'punctuation.definition.comment.js',
        'punctuation.definition.comment.ts',
        'meta.brace.square.js',
        'keyword.control.conditional.js',
        'keyword.control.conditional.ts',
        'keyword.operator.type.annotation.ts',
        'punctuation.section.property-list.begin.bracket.curly.css',
        'punctuation.section.property-list.end.bracket.curly.css',
      ],
      settings: {
        foreground: 'hsl(0 0% 40%)' //#666
      }
    },
    {
      scope: [
        'punctuation.definition.comment.yaml',
        'comment.line.number-sign.yaml',
        'comment.block.json',
        'punctuation.separator.key-value.js',
        'punctuation.separator.key-value.ts',
        'keyword.operator.assignment.js',
        // 'punctuation.separator.key-value.html',
        'punctuation.attribute-shorthand.slot.html.vue',
        'keyword.operator.assignment.ts',
        'punctuation.definition.tag.begin.js.jsx',
        'punctuation.definition.tag.end.js.jsx',
        'punctuation.definition.tag.begin.js',
        'punctuation.definition.tag.end.js',
        'comment.line.graphql.js',
        'punctuation.colon.graphql',
        'comment.block.graphql',
        'comment.line.number-sign.shell',
        'constant.character.escape.line-continuation.shell',
        'punctuation.separator.dictionary.key-value.json',
        'punctuation.support.type.property-name.begin.json',
        'punctuation.support.type.property-name.end.json',
        'keyword.control.as.ts',
        'meta.brace.angle.ts',
        'source.ts.embedded.html.vue',
        'keyword.operator.relational.js',
        'punctuation.definition.binding-pattern.object.js',
        'punctuation.definition.binding-pattern.object.ts',
      ],
      settings: {
        foreground: 'hsl(0 0% 30%)'
      }
    },
    {
      scope: [
        'meta.block.js',
        'punctuation.accessor.js',
        'punctuation.accessor.ts',
        'punctuation.definition.interpolation.begin.html.vue',
        'punctuation.definition.interpolation.end.html.vue',

        'storage.type.type.ts',
        'storage.type.interface.ts',
        'variable.language.this.js',
        'meta.brace.curly.graphql',
        'support.type.graphql',
        'entity.name.command.shell',
        'punctuation.definition.dictionary.begin.json',
        'punctuation.definition.dictionary.end.json',
        'punctuation.definition.block.js',
        'punctuation.definition.block.ts',
        'punctuation.separator.comma.js',
        'punctuation.separator.comma.ts',
        'keyword.operator.optional.ts',
        'storage.type.function.arrow.js',
        'storage.type.function.arrow.ts',
        'keyword.operator.type.ts',

        'punctuation.definition.parameters.begin.bracket.round.css',
        'punctuation.definition.parameters.end.bracket.round.css',
        'punctuation.terminator.rule.css',
        'punctuation.section.function.begin.bracket.round.css',
        'punctuation.section.function.end.bracket.round.css',
        'punctuation.separator.key-value.css',
        'punctuation.separator.list.comma.css',
        'entity.name.tag.nesting.selector.css',
        'entity.other.attribute-name.pseudo-element.css',
        'punctuation.definition.entity.begin.bracket.square.css',
        'punctuation.definition.entity.end.bracket.square.css',
        'entity.other.attribute-name.css',
        'entity.name.tag.css',
      ],
      settings: {
        foreground: 'hsl(0 0% 63%)' // #a0a0a0
      }
    },
    {
      scope: [
        'keyword.control.import.js',
        'keyword.control.import.ts',
        'keyword.control.export.js',
        'keyword.control.export.ts',
        'keyword.control.from.js',
        'keyword.control.from.ts',
        'keyword.control.default.js',
        'keyword.control.default.ts',
        'punctuation.definition.template-expression.begin.js',
        'punctuation.definition.template-expression.end.js',
        'punctuation.definition.template-expression.begin.ts',
        'punctuation.definition.template-expression.end.ts',
        'storage.type.class.js',
        'storage.modifier.js',
        'meta.method.declaration.js',
        'punctuation.section.embedded.begin.js.jsx',
        'punctuation.section.embedded.end.js.jsx',
        'entity.other.attribute-name.js',
        'punctuation.section.embedded.begin.js',
        'punctuation.section.embedded.end.js',
        'comment.block.html',
        'variable.graphql',
        'meta.brace.square.graphql',
        'constant.other.option',
        'punctuation.section.media.begin.bracket.curly.css',
        'punctuation.section.media.end.bracket.curly.css',
      ],
      settings: {
        foreground: 'rgb(92 100 97)'
      }
    },
    {
      scope: [
        'storage.type.js',
        'storage.type.ts',
      ],
      settings: {
        foreground: 'rgb(125 134 132)'
      }
    },
    {
      scope: [
        'entity.name.function.js',
        'entity.name.function.ts',
        'meta.object.member.js',
        'string.template.js',
        'string.template.ts',
        'string.quoted.single.js',
        'string.quoted.single.ts',
        'entity.name.function.graphql',
        'string.quoted.double.graphql',
        'punctuation.assignment.graphql',

        'support.function.calc.css',
        'constant.numeric.css',
        'support.constant.property-value.css',
        'support.function.misc.css',
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.id.css',
        'meta.function.variable.css',

        'meta.property-value.css',

        'support.type.property-name.toml',
        'entity.name.tag.yaml',
        'constant.language.boolean.yaml',
        'entity.name.type.ts',
        'meta.import.js',
        'meta.import.ts',
        'string.quoted.double.js',
        'string.quoted.double.ts',
        'constant.numeric.decimal.js',
        'constant.numeric.decimal.ts',
        'entity.name.type.alias.ts',
        'entity.name.type.interface.ts',
        'support.type.primitive.ts',
        'support.type.builtin.ts',
        'punctuation.definition.string.begin.ts',
        'punctuation.definition.string.end.ts',
        'punctuation.definition.string.begin.js',
        'punctuation.definition.string.end.js',

        'entity.name.tag.html',
        'punctuation.definition.interpolation.begin.html.vue',
        'punctuation.definition.interpolation.end.html.vue',
        'constant.character.escape.backslash.regexp',
        'string.regexp.ts',
        'string.quoted.double.html',
        'entity.name.tag.template.html.vue',
        'text.html.vue-html entity.name.tag',
        'text.html.vue-html support.class.component.html',
        'text.html.vue-html entity.name.tag.template.html.vue',
        'entity.name.tag.script.html.vue',
      ],
      settings: {
        // foreground: 'oklch(0.82 0.23 167.82)'
        // foreground: 'rgb(0,215,175)'
        // foreground: 'oklch(0.84 0.18 162.24)'
        foreground: 'var(--ds-teal)'
      }
    },
    {
      scope: [
        'keyword.control.flow.js',
        'keyword.control.flow.ts',
        'keyword.operator.ternary.js',
        'keyword.operator.ternary.ts',
        'keyword.operator.logical.js',
        'keyword.operator.logical.ts',
        'meta.type.annotation.ts',
        'keyword.operator.comparison.js',
        'keyword.operator.comparison.ts',
        'variable.other.constant.property.js',
        'variable.other.constant.property.ts',
        'meta.type.parameters.ts',
        'keyword.operator.comparison.css',
        'keyword.control.at-rule.media.css',
        'punctuation.definition.keyword.css',
        'punctuation.section.media.begin.bracket.curly.css',
        'punctuation.section.media.end.bracket.curly.css',
        
        'punctuation.definition.block.sequence.item.yaml',
        'keyword.control.trycatch.js',
        'keyword.control.trycatch.ts',
        'keyword.operator.spread.js',
        'keyword.operator.spread.ts',
        'keyword.operator.new.js',
        'keyword.operator.new.ts',
        'keyword.operator.increment.js',
        'keyword.operator.increment.ts',
        'keyword.operator.decrement.js',
        'keyword.operator.decrement.ts',
        'keyword.operator.expression.of.js',
        'keyword.operator.expression.of.ts',
        'keyword.operator.expression.in.js',
        'keyword.operator.expression.in.ts',
        'keyword.control.with.js',
        'keyword.control.with.ts',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html',
      ],
      settings: {
        foreground: 'rgb(0 215 175 / 68%)'
      }
    },
    {
      scope: [
        'text.html.vue-html string.quoted.double.html',
        'text.html.vue-html punctuation.definition.string.begin.html',
        'text.html.vue-html punctuation.definition.string.end.html',
        'text.html.vue-html string.quoted.single.ts',
        'text.html.vue-html string.quoted.single.js',
        'text.html.vue-html punctuation.definition.string.begin.ts',
        'text.html.vue-html punctuation.definition.string.end.ts',
        'text.html.vue-html punctuation.definition.string.begin.js',
        'text.html.vue-html punctuation.definition.string.end.js',

      ],
      settings: {
        foreground: '#999'
      }
    },
    {
      scope: [
        'text.html.vue-html entity.other.attribute-name.html',
        'support.type.property-name.css',
        'support.type.vendored.property-name.css',
        'variable.argument.css',
        'variable.css',
        'keyword.operator.arithmetic.css',
      ],
      settings: {
        foreground: '#eee'
      }
    },
  ],
  bg: 'hsla(0 0% 4% / 1)',
  fg: '#e3e7e6'
}