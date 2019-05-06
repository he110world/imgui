(function(root){

	//https://github.com/google/incremental-dom
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.IncrementalDOM={})}(this,function(t){"use strict";function e(){}function n(t,e){this.attrs=a(),this.attrsArr=[],this.newAttrs=a(),this.staticsApplied=!1,this.key=e,this.keyMap=a(),this.keyMapValid=!0,this.focused=!1,this.nodeName=t,this.text=null}function r(){this.created=h.nodesCreated&&[],this.deleted=h.nodesDeleted&&[]}var i=Object.prototype.hasOwnProperty;e.prototype=Object.create(null);var o=function(t,e){return i.call(t,e)},a=function(){return new e},u="__incrementalDOMData",l=function(t,e,r){var i=new n(e,r);return t[u]=i,i},f=function(t){return c(t),t[u]},c=function(t){if(!t[u]){var e=t instanceof Element,n=e?t.localName:t.nodeName,r=e?t.getAttribute("key"):null,i=l(t,n,r);if(r&&(f(t.parentNode).keyMap[r]=t),e)for(var o=t.attributes,a=i.attrs,s=i.newAttrs,d=i.attrsArr,p=0;p<o.length;p+=1){var h=o[p],v=h.name,m=h.value;a[v]=m,s[v]=void 0,d.push(v),d.push(m)}for(var y=t.firstChild;y;y=y.nextSibling)c(y)}},s=function(t,e){return"svg"===t?"http://www.w3.org/2000/svg":"foreignObject"===f(e).nodeName?null:e.namespaceURI},d=function(t,e,n,r){var i=s(n,e),o=void 0;return o=i?t.createElementNS(i,n):t.createElement(n),l(o,n,r),o},p=function(t){var e=t.createTextNode("");return l(e,"#text",null),e},h={nodesCreated:null,nodesDeleted:null};r.prototype.markCreated=function(t){this.created&&this.created.push(t)},r.prototype.markDeleted=function(t){this.deleted&&this.deleted.push(t)},r.prototype.notifyChanges=function(){this.created&&this.created.length>0&&h.nodesCreated(this.created),this.deleted&&this.deleted.length>0&&h.nodesDeleted(this.deleted)};var v=function(t){return t instanceof Document||t instanceof DocumentFragment},m=function(t,e){for(var n=[],r=t;r!==e;)n.push(r),r=r.parentNode;return n},y=function(t){for(var e=t,n=e;e;)n=e,e=e.parentNode;return n},g=function(t){var e=y(t);return v(e)?e.activeElement:null},k=function(t,e){var n=g(t);return n&&t.contains(n)?m(n,e):[]},x=function(t,e,n){for(var r=e.nextSibling,i=n;i!==e;){var o=i.nextSibling;t.insertBefore(i,r),i=o}},w=null,b=null,N=null,C=null,A=function(t,e){for(var n=0;n<t.length;n+=1)f(t[n]).focused=e},D=function(t){var e=function(e,n,i){var o=w,a=C,u=b,l=N;w=new r,C=e.ownerDocument,N=e.parentNode;var f=k(e,N);A(f,!0);var c=t(e,n,i);return A(f,!1),w.notifyChanges(),w=o,C=a,b=u,N=l,c};return e},O=D(function(t,e,n){return b=t,V(),e(n),T(),t}),M=D(function(t,e,n){var r={nextSibling:t};return b=r,e(n),t!==b&&t.parentNode&&j(N,t,f(N).keyMap),r===b?null:b}),S=function(t,e,n){var r=f(t);return e===r.nodeName&&n==r.key},E=function(t,e){if(!b||!S(b,t,e)){var n=f(N),r=b&&f(b),i=n.keyMap,o=void 0;if(e){var a=i[e];a&&(S(a,t,e)?o=a:a===b?w.markDeleted(a):j(N,a,i))}o||(o="#text"===t?p(C):d(C,N,t,e),e&&(i[e]=o),w.markCreated(o)),f(o).focused?x(N,o,b):r&&r.key&&!r.focused?(N.replaceChild(o,b),n.keyMapValid=!1):N.insertBefore(o,b),b=o}},j=function(t,e,n){t.removeChild(e),w.markDeleted(e);var r=f(e).key;r&&delete n[r]},I=function(){var t=N,e=f(t),n=e.keyMap,r=e.keyMapValid,i=t.lastChild,o=void 0;if(i!==b||!r){for(;i!==b;)j(t,i,n),i=t.lastChild;if(!r){for(o in n)i=n[o],i.parentNode!==t&&(w.markDeleted(i),delete n[o]);e.keyMapValid=!0}}},V=function(){N=b,b=null},P=function(){return b?b.nextSibling:N.firstChild},_=function(){b=P()},T=function(){I(),b=N,N=N.parentNode},B=function(t,e){return _(),E(t,e),V(),N},F=function(){return T(),b},L=function(){return _(),E("#text",null),b},R=function(){return N},U=function(){return P()},X=function(){b=N.lastChild},q=_,z={"default":"__default"},G=function(t){return 0===t.lastIndexOf("xml:",0)?"http://www.w3.org/XML/1998/namespace":0===t.lastIndexOf("xlink:",0)?"http://www.w3.org/1999/xlink":void 0},H=function(t,e,n){if(null==n)t.removeAttribute(e);else{var r=G(e);r?t.setAttributeNS(r,e,n):t.setAttribute(e,n)}},J=function(t,e,n){t[e]=n},K=function(t,e,n){e.indexOf("-")>=0?t.setProperty(e,n):t[e]=n},Q=function(t,e,n){if("string"==typeof n)t.style.cssText=n;else{t.style.cssText="";var r=t.style,i=n;for(var a in i)o(i,a)&&K(r,a,i[a])}},W=function(t,e,n){var r=typeof n;"object"===r||"function"===r?J(t,e,n):H(t,e,n)},Y=function(t,e,n){var r=f(t),i=r.attrs;if(i[e]!==n){var o=Z[e]||Z[z["default"]];o(t,e,n),i[e]=n}},Z=a();Z[z["default"]]=W,Z.style=Q;var $=3,tt=[],et=function(t,e,n){var r=B(t,e),i=f(r);if(!i.staticsApplied){if(n)for(var o=0;o<n.length;o+=2){var a=n[o],u=n[o+1];Y(r,a,u)}i.staticsApplied=!0}for(var l=i.attrsArr,c=i.newAttrs,s=!l.length,d=$,p=0;d<arguments.length;d+=2,p+=2){var h=arguments[d];if(s)l[p]=h,c[h]=void 0;else if(l[p]!==h)break;var u=arguments[d+1];(s||l[p+1]!==u)&&(l[p+1]=u,Y(r,h,u))}if(d<arguments.length||p<l.length){for(;d<arguments.length;d+=1,p+=1)l[p]=arguments[d];for(p<l.length&&(l.length=p),d=0;d<l.length;d+=2){var a=l[d],u=l[d+1];c[a]=u}for(var v in c)Y(r,v,c[v]),c[v]=void 0}return r},nt=function(t,e,n){tt[0]=t,tt[1]=e,tt[2]=n},rt=function(t,e){tt.push(t),tt.push(e)},it=function(){var t=et.apply(null,tt);return tt.length=0,t},ot=function(){var t=F();return t},at=function(t){return et.apply(null,arguments),ot(t)},ut=function(t){var e=L(),n=f(e);if(n.text!==t){n.text=t;for(var r=t,i=1;i<arguments.length;i+=1){var o=arguments[i];r=o(r)}e.data=r}return e};t.patch=O,t.patchInner=O,t.patchOuter=M,t.currentElement=R,t.currentPointer=U,t.skip=X,t.skipNode=q,t.elementVoid=at,t.elementOpenStart=nt,t.elementOpenEnd=it,t.elementOpen=et,t.elementClose=ot,t.text=ut,t.attr=rt,t.symbols=z,t.attributes=Z,t.applyAttr=H,t.applyProp=J,t.notifications=h,t.importNode=c});


	const {elementOpen,elementOpenStart,elementOpenEnd,elementClose,elementVoid,text,attr,patch} = IncrementalDOM

	function Rect(x=0,y=0,w=0,h=0){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
	}

	Rect.prototype = {
		css:function(pos){
			pos = pos || 'fixed'
			return 'position:'+pos+';left:'+this.x+'px;top:'+this.y+'px;width:'+this.w+'px;height:'+this.h+'px;'
		},
		contains:function(pos){
			return pos && this.x<=pos.x && this.x+this.w>=pos.x && this.y<=pos.y && this.y+this.h>=pos.y
		},
		clone:function(){
			return new Rect(this.x,this.y,this.w,this.h)
		},
		cssAutoHeight:function(pos){
			pos = pos || 'fixed'
			return 'position:'+pos+';left:'+this.x+'px;top:'+this.y+'px;width:'+this.w+'px;'
		}
	}

	function make_id(length) {
		let res = ''
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		var len = chars .length
		for (let i = 0; i < length; i++ ) {
			res += chars.charAt(Math.floor(Math.random() * len))
		}
		return res
	}

	function patch_css(css_source, elem_id){
		const prefix = '#' + elem_id + '{'
		const postfix = '}'

		return less.render(prefix + css_source + postfix)
	}

	function add_css(rule){
		const css = document.createElement('style')
		css.type = 'text/css'
	      	css.textContent = rule
		document.getElementsByTagName('head')[0].appendChild(css)
	}

	function get_cursor_pos (elem) {
		return elem.selectionStart
	}

	function set_cursor_pos (e, pos) {
		e.selectionStart = e.selectionEnd = pos
	}

	function gen_elem_id(){
		//id可能以数字开头，要加上前缀，否则不能做element id
		return 'elem-' + make_id(32)
	}

	function clear_dict(d){
		for(const k of Object.keys(d)){
			delete d[k]
		}
	}

	//IMPORTANT:如果有事件值，优先返回事件值
	
	_css_dict = {}

	function ImGuiLayout(root){
		this._dom_root = root
		this._func_list = []
		this._rect_dict = {}
		this._drag_dict = {}
		this._click_pos
		this._window_id = 0

		this._id_str_dict = {}
		this._id_val_dict = {}
		this._id_cursor_dict = {}
		this._id_cursor_text = {}
		this._id_evt_dict = {}
	}
	ImGuiLayout.prototype = {
		_get_return(id,val){
			let ret 
			if (this._id_val_dict.hasOwnProperty(id)) {	
				ret = this._id_val_dict[id]
				delete this._id_val_dict[id]
			} else {
				ret = val
			}
			return ret
		},
		_gen_id(caller_line) {
			const id_str = this._window_id + caller_line
			let idx = this._id_str_dict[id_str]
			if (idx) {//id重复了
				++idx
			} else {
				idx = 1
			}
			this._id_str_dict[id_str] = idx

			return id_str+idx
		},

		_load_cursor(id, elem){
			if (this._id_cursor_dict.hasOwnProperty(id)) {
				const pos = this._id_cursor_dict[id]
				set_cursor_pos(elem, pos)
			}
		},

		_offset_cursor(id, offset){
			if (this._id_cursor_dict.hasOwnProperty(id)) {
				offset = offset || 0
				this._id_cursor_dict[id]+=offset
			}
		},

		_save_cursor(id, elem){
			const pos = get_cursor_pos(elem)
			this._id_cursor_dict[id] = pos
			this._id_cursor_text[id] = elem.value
		},

		_clear_cursor(){
			for(const id in this._id_cursor_dict){
				delete this._id_cursor_dict[id]
			}
		},

		_on_mousedown(id){

			let x0, y0, elem
			//e.onmousedown = drag_mousedown

			const drag_mousedown = (e)=>{
				e = e || window.event
				e.preventDefault()
				e.stopPropagation()

				elem = e.target
				x0 = e.clientX
				y0 = e.clientY
				document.onmousemove = drag_mousemove
				document.onmouseup = drag_mouseup
			}

			const drag_mousemove = (e)=>{
				e = e || window.event
				e.preventDefault()
				const dx = e.clientX - x0
				const dy = e.clientY - y0
				x0 = e.clientX
				y0 = e.clientY
				const r = this._rect_dict[id]
				const left = r.x + dx
				const top = r.y + dy
				elem.style.left = left + 'px'
				elem.style.top = top + 'px'

				//更新rect
				const rect = this._rect_dict[id]
				if (rect) {
					rect.x = left
					rect.y = top
				}
			}

			const drag_mouseup = (e)=>{
				document.onmouseup = null
				document.onmousemove = null
			}

			return drag_mousedown
		},

		beginArea:function(rect){
		},
		_beginHorizontal:function(id){
			elementOpen('div',id,null,'style','display:flex;flex-direction:row;')
		},
		beginHorizontal:function(line){
			const id = this._gen_id(line)
			this._func_list.push(()=>this._beginHorizontal(id))
		},
		_beginVertical:function(id,str,style){
			elementOpen('div',id,null,'style','display:flex;flex-direction:column;'+style)
			text(str)
		},
		beginVertical:function(line,str,style){
			str = str || ''
			style = style || ''
			const id = this._gen_id(line)
			this._func_list.push(()=>this._beginVertical(id,str,style))
		},

		//表格功能
		_beginTable:function(){
			elementOpen('table',null,null)
		},
		beginTable:function(){
			this._func_list.push(()=>this._beginTable())
		},
		_endTable:function(){
			elementClose('table')
		},
		endTable:function(){
			this._func_list.push(()=>this._endTable())
		},

		_beginTableRow:function(){
			elementOpen('tr',null,null)
		},

		beginTableRow:function(){
			this._func_list.push(()=>this._beginTableRow())
		},

		_endTableRow:function(){
			elementClose('tr')
		},

		endTableRow:function(){
			this._func_list.push(()=>this._endTableRow())
		},

		_beginTableHead:function(){
			elementOpen('th')
		},

		beginTableHead:function(){
			this._func_list.push(()=>this._beginTableHead())
		},
		_endTableHead:function(){
			elementClose('th')
		},
		endTableHead:function(){
			this._func_list.push(()=>this._endTableHead())
		},

		_beginTableData:function(){
			elementOpen('td')
		},
		beginTableData:function(){
			this._func_list.push(()=>this._beginTableData())
		},

		_endTableData:function(){
			elementClose('td')
		},
		endTableData:function(){
			this._func_list.push(()=>this._endTableData())
		},

		box:function(){
		},
		_button:function(id,str,style){
			elementOpen('button',id,null,
				    'style','width:100%;'+style+';',
				    'onclick',evt=>{
					    this._id_val_dict[id] = true
				    },
				    'onmousedown',e=>{
					    e.stopPropagation()
				    })
			text(str)
			elementClose('button')
		},
		button:function(line,str,style){
			const id = this._gen_id(line)
			str = str || ''
			style = style || ''
			this._func_list.push(()=>this._button(id,str,style))
			const clicked = !!this._id_val_dict[id]
			if (clicked) {
				delete this._id_val_dict[id]
			}
			return clicked
		},
		_colorField:function(id,hex_color){
			const elem = elementVoid(
				'input',id,null,
				'type','color',
				'onmousedown',e=>e.stopPropagation(),
				'onchange',e=>{
					this._id_val_dict[id] = elem.value
				})
				elem.value = hex_color
		},
		colorField:function(line,hex_color){
			hex_color = hex_color || '#000000'
			if (typeof hex_color==='number') {
				hex_color = '#' + hex_color.toString(16)
			}
			const id = this._gen_id(line)
			this._func_list.push(()=>this._colorField(id,hex_color))
			return this._get_return(id,hex_color)
		},
		_dragWindow:function(id,rect){
			this._drag_dict[id] = true
		},
		dragWindow:function(line,rect){
			const id = this._window_id	//这里必须这样写，_window_id会变的
			this._func_list.push(()=>this._dragWindow(id,rect))
		},
		_dropDown:function(id,idx,list,lab,style){
			elementOpen('div',null,null,'style','width:100%;')
			if (lab) {
				elementOpen('label',null,null,'for',id,'style','float:left;')
				text(lab)
				elementClose('label')
			}
			elementOpen('span',null,null,'style','overflow:hidden;display:block;')
			const elem = elementOpen(
				'select',id,null,
				'id',id,
				'style','width:100%;'+style,
				'onmousedown',e=>e.stopPropagation(),
				'onchange',e=>{
					this._id_val_dict[id] = elem.selectedIndex
				})
			for(const opt of list){
				elementOpen('option',null,null,'value',opt)
				text(opt)
				elementClose('option')
			}
			elementClose('select')

			elementClose('span')

			elem.selectedIndex = idx

			elementClose('div')
		},
		dropDown:function(line,idx,list,lab,style){
			idx = idx || 0
			lab = lab || ''
			style = style || ''
			if (idx>=list.length) {
				idx = 0
			}
			const id = this._gen_id(line)
			this._func_list.push(()=>this._dropDown(id,idx,list,lab,style))
			return this._get_return(id,idx)
		},
		endArea:function(){
		},
		_endHorizontal:function(){
			elementClose('div')
		},
		endHorizontal:function(){
			this._func_list.push(()=>this._endHorizontal())
		},
		_endVertical:function(){
			elementClose('div')
		},
		endVertical:function(){
			this._func_list.push(()=>this._endVertical())
		},

		_foldout:function(id,bval,str){
			const s0 = 'width:0;height:0;border-style:solid;display:inline-block;'
			const right = 'border-width:5px 0 5px 8.7px;border-color:transparent transparent transparent #000000;'
			const down = 'border-width:8.7px 5px 0 5px;border-color:#000000 transparent transparent transparent;'
			const s = bval ? s0+down : s0+right
			elementOpen('div',id,null,'onclick',e=>{
				this._id_val_dict[id] = !bval
			})
			elementVoid(
				'div',null,null,
				'style',s)
			text(str)
			elementClose('div')
		},
		foldout:function(line,bval,str){
			bval = bval || false
			str = str || ''
			const id = this._gen_id(line)
			this._func_list.push(()=>this._foldout(id,bval,str))
			return this._get_return(id,bval)
		},

		horizontalScrollBar:function(){
		},

		_horizontalSlider:function(id,val,left_val,right_val,lab){
			elementOpen('div',null,null)

			if (lab){
				elementOpen('label',null,null,'for',id)
				text(lab)
				elementClose('label')
			}

			const elem = elementVoid(
				'input',id,null,
				'id',id,
				'type','range',
				'min',left_val,
				'max',right_val,
				//'style','width:100%',
				'onmousedown',e=>e.stopPropagation(),
					'onmousemove',e=>e.stopPropagation(),
					'onmouseup',e=>e.stopPropagation(),
					'oninput',e=>{
					this._id_val_dict[id]=elem.value
				})
			elem.value = val
			elementClose('div')
		},
		horizontalSlider:function(line,val,left_val,right_val,lab){
			const id = this._gen_id(line)
			this._func_list.push(()=>this._horizontalSlider(id,val,left_val,right_val,lab))
			return this._get_return(id,val)
		},

		_horizontalRule:function(id){
			elementVoid('hr',id,null)
		},

		horizontalRule:function(line){
			const id = this._gen_id(line)
			this._func_list.push(()=>this._horizontalRule(id))
		},
		_hyperlink:function(id,url,str){
			elementOpen('a',id,null,'href',url,'style','width:fit-content;','target','_blank')
			text(str)
			elementClose('a')
		},
		hyperlink:function(line,url,str){
			const id = this._gen_id(line)
			this._func_list.push(()=>this._hyperlink(id,url,str))
		},

		_label:function(id,str,style,onclick){
			elementOpen('div',id,null,
				    'style','width:100%;overflow-wrap:break-word;'+style,
				    'onmousedown',e=>{
					    e.stopPropagation()
					    if (typeof onclick==='function') {
						    onclick(e)
					    }
				    },
				    'onmousemove',e=>e.stopPropagation(),
				    'onmouseup',e=>e.stopPropagation())
			text(str)
			elementClose('div');
		},
		label:function(line,str,style,onclick){
			if (typeof style==='function') {
				onclick = style
				style = ''
			}
			style = style || ''

			const id = this._gen_id(line)
			this._func_list.push(()=>this._label(id,str,style,onclick))
			return str
		},

		_picture:function(id,url){
			elementVoid('img',id,null,'src',url)
		},
		picture:function(line,url){
			const id = this._gen_id(line)
			this._func_list.push(()=>this._picture(id,url))
		},
		_video:function(id,url){
			elementVoid('video',id,null,'src',url,'controls',true)
		},
		video:function(line,url){
			const id = this._gen_id(line)
			this._func_list.push(()=>this._video(id,url))
		},

		repeatButton:function(str){
		},
		selectionGrid:function(){
		},
		space:function(){
		},

		_textArea2:function(id,str){
			elementOpen('div',null,null,'style','border:1px solid gray;')
			const elem = elementOpen('p',id,null,
						 'contenteditable',true,
						 'onmousedown',e=>{e.stopPropagation()},
						 'oninput',e=>{
							 //输入法
							 //if (e.inputType !== 'insertCompositionText') {
							 if (!e.isComposing) {
								 this._id_val_dict[id]=elem.innerText
							 }
						 })
			text(str)
			elementClose('p')
			elementClose('div')
		},
		textArea2:function(line,str){
			const id = this._gen_id(line)
			this._func_list.push(()=>this._textArea2(id,str))
			return this._get_return(id,str)
		},

		///
		_textArea:function(id,str){
			//elementOpen('div',null,null,'style','width:100%;')
			const elem = elementOpen(
				'textarea',id,null,
				'style','width:100%;',
				'onmousedown',e=>{
					e.stopPropagation()
					this._clear_cursor()
				},
				'onmousemove',e=>e.stopPropagation(),
				'onmouseup',e=>e.stopPropagation(),
				'oninput',e=>{
					if (!e.isComposing) {
						this._id_val_dict[id] = elem.value
						this._save_cursor(id,elem)
					}
				})
			if (!this._id_evt_dict[id]) {
				elem.addEventListener('compositionstart',e=>{
					this._save_cursor(id,elem)
				})
				elem.addEventListener('compositionend',e=>{
					this._id_val_dict[id]=elem.value
					this._offset_cursor(id,e.data.length)
					this._load_cursor(id,elem)
				})

				this._id_evt_dict[id] = true
			}

			if (!this._id_cursor_text[id]) {
				elem.value = str
				this._load_cursor(id,elem)
			}
			elementClose('textarea')
			//elementClose('div')
		},
		textArea:function(line,str){
			const id = this._gen_id(line)
			this._func_list.push(()=>this._textArea(id,str))
			return this._get_return(id,str)
		},


		///
		_textField:function(id,str,lab,type,style){
			elementOpen('div',null,null,'style','width:100%;')
			if (lab) {
				elementOpen('label',null,null,'for',id,'style','float:left;')
				text(lab)
				elementClose('label')
			}

			elementOpen('span',null,null,'style','overflow:hidden;display:block;')
			const elem = elementVoid(
				'input',id,null,
				'id',id,
				'type',type,
				'style','width:100%;box-sizing:border-box;',
				'onmousedown',e=>{
					e.stopPropagation()
					this._clear_cursor()
				},
				'onmousemove',e=>e.stopPropagation(),
				'onmouseup',e=>{
					e.stopPropagation()
				},
				'oninput',e=>{
					this._id_val_dict[id] = elem.value
					this._save_cursor(id,elem)
				}
			)
			if (!this._id_cursor_text[id]) {
				if (elem.value !== str) {
					elem.value = str
					this._load_cursor(id,elem)
				}
			} else {
				delete this._id_cursor_text[id]
			}
			elementClose('span')
			elementClose('div')
		},
		textField:function(line,str,lab,style){
			str = str || ''
			lab = lab || ''
			style = style || ''
			const id = this._gen_id(line)
			this._func_list.push(()=>this._textField(id,str,lab,'text',style))
			return this._get_return(id,str)
		},

		passwordField:function(line,str,lab,style){
			str = str || ''
			lab = lab || ''
			style = style || ''
			const id = this._gen_id(line)
			this._func_list.push(()=>this._textField(id,str,lab,'password',style))
			return this._get_return(id,str)
		},


		///
		_toggle:function(id,bval,str,style){
			elementOpen('div',null,null,'style','display:flex;'+style)
			const elem = elementVoid(
				'input',id,null,
				'id',id,
				'type','checkbox',
				'oninput',e=>this._id_val_dict[id]=elem.checked
				)
			elem.checked = bval

			elementOpen('label',null,null,
				    'for',id,
				    //'style','width:100%;',
				    'onmousedown',e=>e.stopPropagation()
				   )

			text(str)

			elementClose('label')
			elementClose('div')
		},
		toggle:function(line,bval,str,style){
			bval = !!bval
			str = str || ''
			style = style || ''
			const id = this._gen_id(line)
			this._func_list.push(()=>this._toggle(id,bval,str,style))
			return this._get_return(id,bval)
		},


		///
		_radio:function(id,idx,list){
			elementOpen('div',id,null,'style','width:100%;')
			for(let i=0; i<list.length; i++){
				const iid = id + i
				const elem = elementVoid(
					'input',iid,null,
					'id',iid,
					'type','radio',
					'name',id,
					'onchange',()=>{this._id_val_dict[id]=i})
				if (i===idx) {
					elem.checked = true
				}
				elementOpen(
					'label',null,null,
					'for',iid)
				text(list[i])
				elementClose('label')
			}
			elementClose('div')
		},
		radio:function(line,idx,list){
			const id = this._gen_id(line)
			this._func_list.push(()=>this._radio(id,idx,list))
			return this._get_return(id,idx)
		},
		verticalScrollBar:function(){
		},
		verticalSlider:function(){
		},
		_window_begin:function(id,rect,cb,str,elem_id){
			elementOpenStart('div',id,null)
			attr('style',rect.cssAutoHeight('absolute')+'background-color:white;padding:3px;')
			if (elem_id) {
				attr('id',elem_id)
			}
			if (!this._drag_dict[id]) {
				attr('onmousedown', this._on_mousedown(id).bind(this))
			}
			elementOpenEnd('div')

			if (str) {
				text(str)
			}
		},
		_window_end:function(){
			elementClose('div')
		},
		window:function(id,rect,cb,str,style){
			this._window_id = id

			let elem_id
			if (style) {
				elem_id = gen_elem_id(style)
				if (!_css_dict[elem_id]) {

					//style可以是url或者字符串
					if (style.trim().startsWith('http')) {
						//下载css文件
						engine
						.getText(style)
						.then(css_source=>{
							patch_css(css_source, elem_id)
							.then(css_out=>add_css(css_out.css))//加到页面上
						})
						.catch(e=>console.log(e))
					} else {
						 patch_css(style, elem_id)
						 .then(css_out=>add_css(css_out.css))
					}

					_css_dict[elem_id] = true
				}
			}

			this._func_list.push(()=>this._window_begin(id,rect,cb,str,elem_id))
			if (typeof cb === 'function') {
				cb()
			}
			this._func_list.push(()=>this._window_end())

			//返回上一帧的位置？
			let rect2 = this._rect_dict[id]
			if (!rect2) {
				rect2 = rect.clone()
				this._rect_dict[id] = rect2 = rect.clone()
			}
			return rect2
		},
		update:function(){
			patch(this._dom_root, ()=>{
				for(const func of this._func_list){
					func()
				}
			})
			this._func_list.length = 0
			this._click_pos = null
			this._window_id = 0
			clear_dict(this._drag_dict)
			clear_dict(this._id_str_dict)
		},
	}

	function ImGuiManager(){
		this._layout_list = []
		this._func_list = []
	}
	ImGuiManager.prototype = {
		rect:function(x,y,w,h){
			return new Rect(x,y,w,h)
		},
		_patch:function(f){
			const src = f.toString() //包括函数名和参数
			const src_body = src.slice(src.indexOf("{")+1, src.lastIndexOf("}"))
			const lines = src_body.split('\n')
			const out = []
			for(let i=0; i<lines.length; i++){
				const line = lines[i]
				if (line.indexOf('layout') === -1) {
					out.push(line)
				} else {
					const s = make_id(32)
					const nl = lines[i].replace(/(layout\.[a-zA-Z_{1}][a-zA-Z0-9_]+\()/g,`$1"${s}",`)
					out.push(nl)
				}
			}

			const name = this._get_url()

			//HACK
			const debug_url = `//# sourceURL=${name}`
			out.push(debug_url)

			const patched = out.join('\n')
			return new Function('layout',patched)
		},
		contextify:function(f){
			const f2 = this._patch(f)
			f2()
		},
		_get_url:function(){
			const e = new Error()
			const lines = e.stack.split('\n')
			const line = lines[lines.length-1]
			return line.match(/https?:\/\/.*\/[^:]*/)[0]
		},
		layout:function(d,f){
			const layout = new ImGuiLayout(d)
			const func = f//this._patch(f)
			this._layout_list.push(layout)
			this._func_list.push(func)

			requestAnimationFrame(this._update.bind(this))
			return layout
		},
		_update:function(){
			for(let i=0; i<this._func_list.length; i++){
				const func = this._func_list[i]
				const layout = this._layout_list[i]
				func(layout)
				layout.update()
			}
			requestAnimationFrame(this._update.bind(this))
		}
	}

	root.imgui = new ImGuiManager()

})(this)
