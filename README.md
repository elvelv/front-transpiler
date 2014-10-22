# Grunt-сборщик статики и не только

### Клонировать в папку проекта и затереть git

```bash
git clone git@git.devhost.amg:yshapkarin/front-transpiler.git
cd front-transpiler
rm -rf .git
```

### Или даже одной строкой, если не страшно :smirk_cat:

```bash
# todo: не обзательно везде использовать именно &&
link='git@git.devhost.amg:yshapkarin/front-transpiler.git' && git clone ${link} && _git=${link#*/} && cd $(echo ${_git%.*}) && rm -rf .git
```

### Команды Grunt

```bash
# копиляция и запуск watch
grunt
# компиляция
grunt co
```

```
На каждую сборку будет своя ветка. Типа c stylus-to-less, jade-to-underscore, возможно jade-to-twig, with-coffeescript и т.д.
В ветке master скорее всего не будет ничего кроме readme.md
```
