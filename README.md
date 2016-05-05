## Prototyping templates with stylus and jade

#### Clone into the project and remove git files

```bash
git clone git@github.com:shapkarin/front-transpiler.git
cd front-transpiler
rm -rf .git
```

#### Or :one: line

```bash
link='git@github.com:shapkarin/front-transpiler.git' 
name='' 
&& git clone ${link} 
&& _git=${link#*/} 
&& cd $(echo ${_git%.*}) 
&& mv ${_git%.*} ${name}
&& rm -rf .git
```

#### Grunt tasks

```bash
# compile and run watch
grunt
# compile
grunt co
```