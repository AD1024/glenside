initSidebarItems({"constant":[["STB_GLOBAL","Global symbol."],["STB_GNU_UNIQUE","Unique symbol.."],["STB_HIOS","End of OS-specific."],["STB_HIPROC","End of processor-specific."],["STB_LOCAL","=== Sym bindings === Local symbol."],["STB_LOOS","Start of OS-specific."],["STB_LOPROC","Start of processor-specific."],["STB_NUM","Number of defined types.."],["STB_WEAK","Weak symbol."],["STT_COMMON","Symbol is a common data object."],["STT_FILE","Symbol’s name is file name."],["STT_FUNC","Symbol is a code object."],["STT_GNU_IFUNC","Symbol is indirect code object."],["STT_HIOS","End of OS-specific."],["STT_HIPROC","End of processor-specific."],["STT_LOOS","Start of OS-specific."],["STT_LOPROC","Start of processor-specific."],["STT_NOTYPE","=== Sym types === Symbol type is unspecified."],["STT_NUM","Number of defined types."],["STT_OBJECT","Symbol is a data object."],["STT_SECTION","Symbol associated with a section."],["STT_TLS","Symbol is thread-local data object."],["STV_DEFAULT","=== Sym visibility === Default: Visibility is specified by the symbol’s binding type"],["STV_ELIMINATE","Eliminate: extends the hidden attribute. Not written in any symbol table of a dynamic executable or shared object."],["STV_EXPORTED","Exported: ensures a symbol remains global, cannot be demoted or eliminated by any other symbol visibility technique."],["STV_HIDDEN","Hidden: Not visible to other components, necessarily protected. Binding scope becomes local when the object is included in an executable or shared object."],["STV_INTERNAL","Internal: use of this attribute is currently reserved."],["STV_PROTECTED","Protected: Symbol defined in current component is visible in other components, but cannot be preempted. Any reference from within the defining component must be resolved to the definition in that component."],["STV_SINGLETON","Singleton: ensures a symbol remains global, and that a single instance of the definition is bound to by all references within a process. Cannot be demoted or eliminated."]],"fn":[["bind_to_str","Get the string for some bind."],["get_type","Convenience function to get the &’static str type from the symbols `st_info`."],["is_import","Is this information defining an import?"],["st_bind","Get the ST bind."],["st_type","Get the ST type."],["st_visibility","Get the ST visibility."],["type_to_str","Get the string for some type."],["visibility_to_str","Get the string for some visibility"]],"mod":[["sym32",""],["sym64",""]],"struct":[["Sym","A unified Sym definition - convertible to and from 32-bit and 64-bit variants"],["SymIterator","An iterator over symbols in an ELF symbol table"],["Symtab","An ELF symbol table, allowing lazy iteration over symbols"]]});